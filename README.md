# nativescript-storage
local Storage for NativeScript

https://play.nativescript.org
add storage folder
put this index.js file into "storage" folder

var Storage = require("../storage");
var storage = new Storage();

storage.set("storageKey1", "storageValue1");

storage.get("storageKey1");

storage.delete("storageKey1");

storage.clear();

storage.length();

storage.getKeysArray();

