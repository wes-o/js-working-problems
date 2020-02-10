// a-paragraph.js

fetch( "./a-paragraph.html" )
.then( stream => stream.text() )
.then( text => define( text ) )

function define( html ){
  
  class AParagraph extends HTMLElement {
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

      const parTemplate = document.getElementById('a-paragraph');
      const templateContent = parTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
  customElements.define('a-paragraph', AParagraph);
}  

