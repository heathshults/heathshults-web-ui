
function SerializeForm(formId: HTMLFormElement): any {
// Get the form
const form = formId;
// const form = <HTMLFormElement>document.querySelector('formId');
console.log(form);
// Get all field data from the form
const data = new FormData(form);
  /**
   * @summary Serializes form data
   * @param  {any} data 
   * @return  
  */
   const serialize = (data): any =>  {
    const obj = {};
    for (const [key, value] of data) {
      if (obj[key] !== undefined) {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }
    return obj;
  };
  serialize(data);

}
const _SerializeForm = SerializeForm;
export { _SerializeForm as SerializeForm };
/** 
  * Updates the userId field with a new value
  * data.set('userId', '3');
  * Creates a new key, "date", with a value of "4"
  * data.set('date', 'July 4');
  * 
  * Add a second "body" key to the data FormData object
  * data.append('body', 'Eat ice cream');
  * Delete items with the "body" key
  * data.delete('body');
  * Convert to a query string
  * let queryString = new URLSearchParams(data).toString()
  * Convert to an object
  * let formObj = serialize(data);
*/
