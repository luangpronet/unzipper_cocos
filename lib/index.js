'use strict';

/**
 * Representation a of zip file in js
 * @constructor
 */
function Unzipper() {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof Unzipper)) {
        return new Unzipper();
    }

    if(arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    this.files = {};

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    this.clone = function() {
        var newObj = new Unzipper();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
Unzipper.prototype = require('./object');
Unzipper.prototype.loadAsync = require('./load');
Unzipper.support = require('./support');
Unzipper.defaults = require('./defaults');

// TODO find a better way to handle this version,
// a require('package.json').version doesn't work with webpack, see #327
Unzipper.version = "3.6.0";

Unzipper.loadAsync = function (content, options) {
    return new Unzipper().loadAsync(content, options);
};

Unzipper.external = require("./external");
module.exports = Unzipper;
