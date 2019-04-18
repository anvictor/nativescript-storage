/*!
 * storage <https://github.com/anvictor/nativescript-storage>
 *
 * 
 */

'use strict';

/**
 * Expose `storage`
 */

module.exports = Storage;

function Storage(cache) {
  this.cache = cache || {};
}

Storage.prototype.set = function (key, value) {
  this.cache[key] = value;
  return this;
};

Storage.prototype.get = function (key) {
  return this.cache[key];
};

Storage.prototype.delete = function (key) {
  this.cache[key].delete;
};

Storage.prototype.length = function () {
  return Object.keys(this.cache).length;
};

Storage.prototype.getKeysArray = function () {
  return Object.keys(this.cache);
};

Storage.prototype.clear = function () {
  console.log('clear works');
  this.cache = {};
  return this.cache;
};
