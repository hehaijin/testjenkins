'use strict';

var target = {native:'nativeValue'};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, {});
p.world === "Hello, world!";

console.log(p.world);
console.log(p.xy);
console.log(p.native)