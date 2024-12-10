const packageJson = require("../package.json");
const fs = require("fs/promises");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "../");
const filePath = path.join(root, "src/version.json");

// Easiest way to get the current git revision
const revision = execSync("git rev-parse HEAD", { cwd: root }).toString().trim();

//
// The version file contains:
// - The build revision
// - The package version
//

const versionJson = {
    build: revision,
    version: packageJson.version,
};

(async () => {
    await fs.writeFile(filePath, JSON.stringify(versionJson));
})()
    .then(() => {
        console.log(`✅ Version file written to ${path.relative(root, filePath)}`);
    })
    .catch(console.error);
