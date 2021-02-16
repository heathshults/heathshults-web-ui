import "reflect-metadata";

export function Prop() {
  return function (target: Object, key: string | symbol) {
    const log = console.log;
    
    const camelCaseToDash = (property) => {
      let ret = '', prevLowercase = false, prevIsNumber = false;
      
      for (const s of property) {
        const isUppercase = s.toUpperCase() === s;
        const isNumber = !isNaN(s);
        if (isNumber) {
          if (prevLowercase) {
            ret += '-';
          }
        } else {
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
    
    let val: any = this[key];
    const getter = () => {
      val = target[key];
      return val;
    };
    
    // property setter
    const setter = (newVal)=> {
      console.log(`Set: ${key} => ${newVal}`);
      val = newVal;
      return val;
    };
    
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  };
}

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
