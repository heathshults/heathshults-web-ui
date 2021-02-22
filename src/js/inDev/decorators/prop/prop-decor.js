"use strict";
exports.__esModule = true;
exports.Prop = void 0;
require("reflect-metadata");
function Prop() {
    return function (target, key) {
        var log = console.log;
        var camelCaseToDash = function (property) {
            var ret = '', prevLowercase = false, prevIsNumber = false;
            for (var _i = 0, property_1 = property; _i < property_1.length; _i++) {
                var s = property_1[_i];
                var isUppercase = s.toUpperCase() === s;
                var isNumber = !isNaN(s);
                if (isNumber) {
                    if (prevLowercase) {
                        ret += '-';
                    }
                }
                else {
                    if (isUppercase && (prevLowercase || prevIsNumber)) {
                        ret += '-';
                    }
                }
                ret += s;
                prevLowercase = !isUppercase;
                prevIsNumber = isNumber;
            }
            log(ret.replace(/-+/g, '-').toLowerCase());
            return ret.replace(/-+/g, '-').toLowerCase();
        };
        // mdiDiceD10Outline =>  mdi-dice-d10-outline
        // mdiKeyboardF10 mdi-keyboard-f10
        // mdiNumeric1 mdi-numeric-1
        var val = this[key];
        var getter = function () {
            val = target[key];
            return val;
        };
        // property setter
        var setter = function (newVal) {
            console.log("Set: " + key + " => " + newVal);
            val = newVal;
            return val;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
            writable: true
        });
    };
}
exports.Prop = Prop;
// const log = console.log;
// const camelCaseFormatter = (str = ``, debug = false) => {
//     let result = '';
//     for(let item of [...str]) {
//         if(item.charCodeAt() > 'a'.charCodeAt() || !Number.isNaN(+item)) {
//             result += item;
//         } else {
//             result += `-${item.toLocaleLowerCase()}`;
//         }
//     }
//     if(debug) {
//         log(`✅ result = `, result);
//     }
//     return result;
// }
// const str = 'costInV2';
// // "costInV2"
// camelCaseFormatter(str, true);
// // node  ./camelCase.js
// // result =  cost-in-v2
