// a-card.js  

fetch( "./a-card.html" )
.then( stream => stream.text() )
.then( text => define( text ) )

function define( html ){
  
  class ACard extends HTMLElement {
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

      const cardTemplate = document.getElementById('a-card');
      const templateContent = cardTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
  customElements.define('a-card', ACard);
}  

// const container = document.querySelector(".container");
// const coffees = [
//   {
//     name: "Perspiciatis",
//     image: "images/coffee1.jpg"
//   },
//   {
//     name: "Voluptatem",
//     image: "images/coffee2.jpg"
//   },
//   {
//     name: "Explicabo",
//     image: "images/coffee3.jpg"
//   },
//   {
//     name: "Rchitecto",
//     image: "images/coffee4.jpg"
//   }
// ];
// const showCoffees = () => {
//   let output = "";
//   coffees.forEach(
//     ({ name, image }) =>
//       (output += `
//               <div class="card">
//                 <img class="card-avatar" src=${image} />
//                 <h1 class="card-title">${name}</h1>
//                 <a class="card-link" href="#">Link!</a>
//               </div>
//               `)
//   );
//   container.innerHTML = output;
// };

// document.addEventListener("DOMContentLoaded", showCoffees);
