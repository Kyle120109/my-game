const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://localhost:5173');

    // Wait for game to load
    await page.waitForTimeout(3000);

    // Press F4 to open debug map
    await page.keyboard.press('F4');
    await page.waitForTimeout(3000); // Wait for debug map to generate and render

    // Enter free camera mode
    await page.keyboard.press('F2');

    // Move camera with W
    await page.keyboard.down('w');
    await page.waitForTimeout(2000);
    await page.keyboard.up('w');

    // Take screenshot 1
    await page.screenshot({ path: 'crane_debug_1.png' });

    // Move more
    await page.keyboard.down('w');
    await page.waitForTimeout(1000);
    await page.keyboard.up('w');

    await page.screenshot({ path: 'crane_debug_2.png' });

    // Escape to menu
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000);

    // Click Harbor map (approximate position based on subagent clicks: x: 267, y: 544 )
    await page.mouse.click(267, 544);
    await page.waitForTimeout(500);

    // Click Start Game (approx: x: 192, y: 689)
    await page.mouse.click(192, 689);
    await page.waitForTimeout(4000);

    // Free cam
    await page.keyboard.press('F2');
    await page.keyboard.down('w');
    await page.keyboard.down('a');
    await page.waitForTimeout(3000);
    await page.keyboard.up('w');
    await page.keyboard.up('a');

    await page.screenshot({ path: 'harbor_worksites.png' });

    await browser.close();
})();
