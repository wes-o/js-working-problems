// elem-details.js

fetch( "./elem-details.html" )
.then( stream => stream.text() )
.then( text => define( text ) )

function define( html ){
  
  class ElemDetails extends HTMLElement {
    set value(value) {
      this._value = value;
      this.valueElement.innerText = this._value;
    }

    get value() {
      return this._value;
    }
    
    constructor() {
      super();
      //this._value = 0;

      const elemDetailsTemplate = document.getElementById('elem-details');
      const templateContent = elemDetailsTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
  customElements.define('elem-details', ElemDetails);
}  

