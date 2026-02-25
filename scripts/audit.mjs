import puppeteer from 'puppeteer';

// Automated audit script that connects to the Vite dev server and runs map inspections.

async function runAudit() {
    console.log('[audit] Launching headless browser for map validation...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Pipe browser console logs to node console
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.error(`[browser error] ${msg.text()}`);
        } else if (msg.type() === 'warning') {
            console.warn(`[browser warn] ${msg.text()}`);
        } else {
            console.log(`[browser] ${msg.text()}`);
        }
    });

    page.on('pageerror', err => {
        console.error(`[page error] ${err.toString()}`);
    });

    try {
        console.log('[audit] Navigating to http://localhost:5173...');
        await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 30000 });

        console.log('[audit] Running fullMapSweep()...');
        const auditResult = await page.evaluate(async () => {
            // Must wait for the game engine to expose itself
            return new Promise((resolve) => {
                let attempts = 0;
                const check = () => {
                    if (window.__BIKE_GAME__ && window.__BIKE_GAME__.inspect) {
                        try {
                            const res = window.__BIKE_GAME__.inspect.fullMapSweep();
                            resolve(res);
                        } catch (err) {
                            resolve({ pass: false, error: err.message, stack: err.stack });
                        }
                    } else {
                        attempts++;
                        if (attempts > 50) {
                            resolve({ pass: false, error: 'Timeout waiting for window.__BIKE_GAME__' });
                        } else {
                            setTimeout(check, 100);
                        }
                    }
                };
                check();
            });
        });

        if (auditResult.error) {
            console.error('[audit] Audit failed with script error:', auditResult.error);
            if (auditResult.stack) console.error(auditResult.stack);
            process.exit(1);
        }

        const fs = await import('fs');
        if (auditResult.pass) {
            console.log('[audit] SUCCESS. All maps passed validation.');
            fs.writeFileSync('docs/audit.json', JSON.stringify(auditResult, null, 2));
            process.exit(0);
        } else {
            console.error('[audit] FAILED. Maps did not pass validation.');
            fs.writeFileSync('docs/audit.json', JSON.stringify(auditResult, null, 2));
            process.exit(1);
        }
    } catch (err) {
        console.error('[audit] Failed to run audit script:', err.message);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

runAudit();
