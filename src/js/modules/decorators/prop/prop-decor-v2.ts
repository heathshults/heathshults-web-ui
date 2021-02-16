import "reflect-metadata";
const log = console.log;

function Prop(target: Object, propertyName: string) {
  const formattedPropName: string = camelCaseToDash(propertyName);
  // property value
  let _val = this[formattedPropName];

  // property getter method
  const getter = () => {
      console.log(`Get: ${formattedPropName} => ${_val}`);
      return _val;
  };

  // property setter method
  const setter = newVal => {
      console.log(`Set: ${formattedPropName} => ${newVal}`);
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
  let ret = '', prevLowercase = false, prevIsNumber = false;

  for(const s of property) {
    const isUppercase = s.toUpperCase() === s;
    const isNumber = !isNaN(s);
    if(isNumber) {
      if(prevLowercase) {
        ret += '-';
      }
    } else {
      if(isUppercase && (prevLowercase || prevIsNumber)) {
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
