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

const ALLOWED_BUMP_TYPES = ["major", "minor", "patch", "premajor", "preminor", "prepatch", "prerelease"];

if (process.argv.length < 3) {
    throw new Error("Please provide the merge request title as the first argument.");
}

const mergeRequestTitle = process.argv[2];

const bumpTypeRegex = new RegExp(`chore\\(release\\)\\: (${ALLOWED_BUMP_TYPES.join("|")}) \\- .*`);
const bumpTypeMatch = mergeRequestTitle.match(bumpTypeRegex);

if (!bumpTypeMatch) {
    throw new Error(`Invalid merge request title: ${mergeRequestTitle}`);
}

if (!bumpTypeMatch[1]) {
    throw new Error(`Invalid bump type: ${bumpTypeMatch[1]}`);
}

const bumpType = bumpTypeMatch[1];

execSync(`npm version ${bumpType} --no-git-tag-version`);
