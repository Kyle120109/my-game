# Map Validation Report

- generatedAt: 2026-02-20T13:37:40.802Z
- overallPass: true

## Ring
- pass: true
- likelyAirWalls: 0
- mountainShearedMeshes: 0
- mountainOversizedFaces: 0
- mountainDegenerateFaces: 0
- mountainShardFaces: 0
- blockedSamples: 0/300
- routeOcclusions: 0
- decorOcclusions: 0
- terrainOcclusions: 0
- freeCamBlockedRatio: 0.000
- freeCamPass: true

## Serpent
- pass: true
- likelyAirWalls: 0
- mountainShearedMeshes: 0
- mountainOversizedFaces: 0
- mountainDegenerateFaces: 0
- mountainShardFaces: 0
- blockedSamples: 2/300
- routeOcclusions: 0
- decorOcclusions: 0
- terrainOcclusions: 635
- freeCamBlockedRatio: 0.196
- freeCamPass: true

## Saved Screenshots
- screenshots/ring-audit-01.png
- screenshots/ring-audit-02.png
- screenshots/ring-audit-03.png
- screenshots/serpent-audit-01.png
- screenshots/serpent-audit-02.png
- screenshots/serpent-audit-03.png

## Remaining Issues Not Fully Fixed
- serpent free-cam blocked ratio 0.196 is close to threshold 0.2 (terrain occlusion at canyon turns).
- serpent blocked samples 2/300 remains, currently below threshold and not gameplay-blocking.
- visual style remains low-poly by design; mountains now use closed volumes and colliders, but not high-detail photoreal meshes.
