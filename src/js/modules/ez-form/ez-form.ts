import { TimeStamper } from '../time-stamper/';
import { SerializeForm } from './serialize-form';

const dateTime = new TimeStamper('datetime');
const qs= document.querySelector;
const l = console.log;

export default class EZForm {
  public formFields: any;
  public formSelector: any;
  public messageBox: HTMLElement;
  public successIcon: any;
  public errorIcon: any;
  public successMessage: string;
  public errorMessage:string;
  public ezsystemfields: Array<any>;
  public createCSS: any;
  
  public resetForm: any;

  public EZConfig = {
    'InputRules': {
      'name': 'required',
      'message': 'required',
      'optin': 'required',
      'email': {
        'required': true,
        'validateEmailFormat': true
      }
    },
    'messages': {
      'name': 'Please enter your name',
      'message': 'A message is required.',
      'optin': 'Opt-in for updates via email.',
      'email': 'A valid email address is required.'
    }
  }
  private apiurl = 'http://127.0.0.1:3000/api/ezform.php';
  readyToSendListener = document.addEventListener('readyToSend', EZForm.prototype.validate);
  constructor(
    ezselector: string, 
    private theForm?: HTMLFormElement, 
    private formType?: string,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public datajson?: any,
  ) {
    // document.addEventListener('readySubmit', function (e) { alert('yea!')}, false);

    // the form
    this.formSelector = ezselector;
    // theForm = <HTMLFormElement>document.querySelector(this.formSelector);
    theForm = document.querySelector(ezselector);
    formType = theForm.getAttribute('data-formtype');
    
    this.formFields = theForm.querySelectorAll('input, select, textarea');
    // const apiurl = 'http://blueprint.fanniemae.com:9306/api/ezform.php'

    // form messaging
    this.messageBox = document.querySelector('#msgSubmit');
    this.successIcon = '<svg version="1.1" class="hs-icon-inject" xmlns="http=//www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g class="fk-icon-wrapper"><path d="M21.748 6.398l-1.601-1.601a.754.754 0 0 0-1.067 0l-9.596 9.596-4.565-4.597a.754.754 0 0 0-1.067 0l-1.6 1.601a.754.754 0 0 0 0 1.067l6.693 6.738a.754.754 0 0 0 1.067 0L21.748 7.465a.754.754 0 0 0 0-1.067z"></path></g></svg>';
    this.errorIcon = '<svg version="1.1" class="hs-icon-inject" xmlns="http=//www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g class="fk-icon-wrapper"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g></svg>';
    this.successMessage = null;
    this.errorMessage = null;

    // The form data
    this.ezsystemfields = [
      {"name":"ezformtype", "value":this.formType},
      {"name":"ezdatecreated", "value":dateTime}
    ];
    l(this.ezsystemfields);

    l(ezselector);
    const newFieldData: Array<any> = [];
    this.formFields.forEach(input => {
      newFieldData.push({"name": input.id, "value": input.value});
    });
    l(newFieldData);



    this.datajson = newFieldData;
    this.datajson.push({"name":"ezformtype", "value":this.formType}, {"name":"ezformdate", "value":dateTime});
    // let data = {...datajson, ...ezsystemfields}
    
    console.log(this.datajson);
    document.querySelector('#success').innerHTML = JSON.stringify(this.datajson);

    // this.theForm[0].reset();
    EZForm.prototype.resetForm = () => this.theForm.reset();

    // Disable the inputs for the duration of the fetch post sendData. Intentionaly placed after json.stringify
    // Disabled form elements will not be processed.
    document.querySelector(this.formSelector).setAttribute('disabled', `${true}`);
    this.createCSS = EZForm.styles();
    
    // Validate form data
    EZForm.prototype.validate = ()=> {
      l('validation time');

      (()=>{
        document.querySelector(`${this.formSelector} input`).addEventListener('keyup', (e)=>{
          const inputField = e.target as HTMLInputElement;
          inputField.classList.add('edited');
        });
      
        document.querySelector('.form-example [type="submit"]').addEventListener('click.formValidation', (e)=>{
          let shouldPrevent = false;
          const errorList = [];
      
          const vForm = theForm;
          const vInputs = vForm.find('input[required], textarea[required], select[required]');
      
          vInputs.each(function(index, input){
            const errorMessageSelector = 'label[for="' + document.querySelector(input).getAttribute('id') + '"] .error-message';
            vForm.find(errorMessageSelector).removeAttribute('aria-live');
            const error = vForm.find(errorMessageSelector);
            error.css('display', 'none');
      
            if(!input.validity.valid){
              error.css('display', 'inline-block');
              shouldPrevent = true;
              errorList.push(error);
      
            }
            else {
              error.css('display', 'none');
            }
          });
      
          if(!vForm.checkValidity()){
          // if(!vForm[0].checkValidity()){
            e.preventDefault();
            errorList[0].attr('aria-live', 'assertive');
          }
        });
      });
      
      
    };
  }

  static ezformInit(selector: string): any {
    new EZForm(selector);
  }
  validate;
   getStatusMsg(result: number): string {
      this.successMessage = `
            <div id="successDiv" class="bp-u-text-left bp-u-p-md">
              <h2>${this.successIcon} Thank you!</h2> 
              <p class="bp-u-text-size-lg">
                We have received your message.<br>
                A Blueprint expert will conatact you soon.
              </p>
            </div>`;

      this.errorMessage = `
            <div id="errorDiv" class="bp-u-text-left bp-u-p-md">
              <h2>${this.errorIcon} ERROR! </h2>
              <p>${'Error in form'}
              </p>
            </div>`;

      if (result === 1) {
        return this.successMessage;
      }
      if (result === 0) {
        return this.errorMessage;
      }
    }
    formSuccess(): void {
      this.messageBox.innerHTML = `${this.getStatusMsg(1)}`; 
      this.messageBox.classList.add('hs-message-box--blue is-visible');
      this.theForm.classList.add('bp-u-display-none');
      return this.resetForm();
    }

    formError(e: Event): void {
      this.theForm.classList.add('shake animated');
      this.messageBox.innerHTML = `${this.getStatusMsg(0)}; From server:<br>${e}`; 
      this.messageBox.classList.add('hs-message-box--destructive is-visible');
    }

  fetchParams: any = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(this.datajson)
  } 
  sendFormData = fetch(this.apiurl, this.fetchParams)
  .then(response => {
    if (!response.ok) {throw Error(response.statusText)}
    
    return response;
  }).then(response => {
    l('ok:' + response);

  }).catch(error => {
    l(error);

  }).finally(() => document.querySelector(this.formSelector).setAttribute('disabled', `${true}`));

  /**
   * Add styles to the head tag
   * @return {void}
   */
  static styles(): void {
    const theStyleTag = document.createElement('style');
    theStyleTag.innerHTML = `
      .hs-message-box {
        padding: 0rem;
        text-align: left;
        width: 655px;
        height: -1px;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
        -webkit-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
        -moz-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
          -o-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);

      -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
        -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
          -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
      }
      .hs-message-box.is-visible {
        padding: 1.5rem;
        width: 650px;
        height: 250px;
        overflow-y: auto;
        -webkit-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
        -moz-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
          -o-transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition: all 500ms cubic-bezier(0.770, 0.000, 0.155, 1.000);

      -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
        -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
          -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
              transition-timing-function: cubic-bezier(0.770, 0.000, 0.155, 1.000);
      }
      .hs-message-box--destructive {
        background: rgba(156, 32, 32, 0.2);
        color: rgba(156, 32, 32, 1);
        border: 2px solid rgba(156, 32, 32, 0.6)
      }
      .hs-message-box--green {
        background: rgba(35, 129, 150, .2);
        color: rgba(35, 129, 150, 1);
        border: 2px solid rgba(35, 129, 150, 0.6);
      }
      .hs-message-bo--blue {
        background: rgba(10, 101, 157, 0.2);
        color: rgba(10, 101, 157, 1);
        border: 2px solid rgba(10, 101, 157, 0.6);
      }
      .bp-form-item  .bp-button.bp-button-primary.hs-restart-button.hs-restart-button {
        display: none !important;
      }
      .bp-form-item .bp-button.bp-button-primary.hs-restart-button.hs-restart-button.is-visible {
        display: inline-block;
      }
      input.edited:invalid {
        box-shadow: 0 0 5px 1px red;
      }
      
      input:focus:invalid {
        outline: none;
      }
      .error-message {
        display: none;
      }
      .error-message.show {
        display: block;
      }
      `;
    const theHeadTag = document.querySelector('HEAD');
    theHeadTag.append(theStyleTag);
  }
  

}
const _EZForm =  EZForm;
export { _EZForm as EZForm };

// new EZForm('#ezform');

