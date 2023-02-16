/**
 * This is the default scenarios collection that will be used if there is not a theme-specific scenarios file in place
 * for a given theme. You can copy this file and then name it `template-paths.js`.
 *
 */

/**
 * Stores the scenarios for each page/endpoint that should be tested
 * @type {{}}
 */
var scenarioPaths = {};

/**
 * For each page/endpoint you want to test, create a new array entry that contains at least the keys/properties `label`
 * and `path`.
 *
 * additional properties you can set for each scenario are documented here: https://github.com/garris/BackstopJS#advanced-scenarios
 *
 * However, do NOT set `referenceUrl` or `url` as those will be overridden
 *
 * `path` should assume the URL ends in a trailing slash. For example, if the page you want to test against is
 * https://master-7rqtwti-fqfjrmtjbjta4.eu-3.platformsh.site/a/path/to/foo/bar/
 * Then for `path` it should be "a/path/to/foo/bar/"
 *
 * @type {{path: string, label: string}[]}
 */
scenarioPaths.paths = [
    {
        "label": "Home",
        "delay": 2000,
        "hideSelectors": [".mt-4"],
    },
    {
        "label": "Forced 404",
        "delay": 2000,
    },
];

module.exports = scenarioPaths;
