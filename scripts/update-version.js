/**
 * This script is used to update the version of the package.json file.
 *
 * It reads the type of bump to perform from the last commit message and updates the version accordingly using `npm version`.
 *
 * Commit message format:
 * - `chore(release): major - ...`
 *
 * The allowed types of bumps are:
 * - major
 * - minor
 * - patch
 * - premajor
 * - preminor
 * - prepatch
 * - prerelease
 */

const { execSync } = require("child_process");

const commitMessage = execSync("git log -1 --pretty=%B").toString().trim();

const bumpType = commitMessage.match(
    /chore\(release\): (major|minor|patch|premajor|preminor|prepatch|prerelease) - /,
)[1];

execSync(`npm version ${bumpType} --no-git-tag-version`);
