// This file is used to configure Metro bundler.
// It also includes polyfills for newer Array methods that might be missing in older Node.js versions (e.g., Node 18).

if (!Array.prototype.toReversed) {
  Array.prototype.toReversed = function () {
    return this.slice().reverse();
  };
}

if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function (compareFn) {
    return this.slice().sort(compareFn);
  };
}

if (!Array.prototype.toSpliced) {
  Array.prototype.toSpliced = function (start, deleteCount, ...items) {
    const copy = this.slice();
    copy.splice(start, deleteCount, ...items);
    return copy;
  };
}

if (!Array.prototype.with) {
  Array.prototype.with = function (index, value) {
    const copy = this.slice();
    copy[index] = value;
    return copy;
  };
}

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;
