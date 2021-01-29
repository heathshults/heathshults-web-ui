class Prop {

  constructor(target: Record<string, any> | Array<string>, key: string) {
   
    // property value
    let _val: any = this[key];
   
    // property getter
    const getter = function () {
      console.log(`Get: ${key} => ${_val}`);
      return _val;
    };
   
    // property setter
    const setter = function (newVal) {
      console.log(`Set: ${key} => ${newVal}`);
      _val = newVal;
    };
   
    // Delete property.
    if (delete this[key]) {
     
        // Create new property with getter and setter
         return  Object.defineProperty(target, key, {
          get: getter,
          set: setter,
          enumerable: true,
          configurable: true
        });
    } else {
      return _val;
    }
  }
}

export { Prop };
