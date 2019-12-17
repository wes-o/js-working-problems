/*  
 Template for Web Components 
*/
customElements.define('a-paragraph',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('a-paragraph');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

const slottedSpan = document.querySelector('a-paragraph span');

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot)
