"use strict";
exports.__esModule = true;
require("reflect-metadata");
var log = console.log;
function Prop(target, propertyName) {
    var formattedPropName = camelCaseToDash(propertyName);
    // property value
    var _val = this[formattedPropName];
    // property getter method
    var getter = function () {
        console.log("Get: " + formattedPropName + " => " + _val);
        return _val;
    };
    // property setter method
    var setter = function (newVal) {
        console.log("Set: " + formattedPropName + " => " + newVal);
        _val = newVal;
    };
    // Delete property.
    if (delete this[formattedPropName]) {
        // Create new property with getter and setter
        Object.defineProperty(target, formattedPropName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
function camelCaseToDash(property) {
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
}
/**
  class Employee {

    @Prop()
    name: string;

  }

  const emp = new Employee();
  emp.name = 'Mohan Ram';
  console.log(emp.name);
  // Set: name => Mohan Ram
  // Get: name => Mohan Ram
  // Mohan Ram

*/
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
