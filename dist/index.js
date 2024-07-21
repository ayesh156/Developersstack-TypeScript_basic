"use strict";
function sum(...values) {
    let ttl = 0;
    for (const temp of values) {
        ttl += temp;
    }
    return ttl;
}
console.log(sum(10, 30));
console.log(sum(10, 20, 30, 40));
console.log(sum());
