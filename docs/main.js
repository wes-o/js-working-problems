/*  
 Templates for Web Components 
  main.js
*/

customElements.define('a-paragraph',
  class extends HTMLElement {
    constructor() {
      super();

      const parTemplate = document.getElementById('a-paragraph');
      const templateContent = parTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

customElements.define('elem-details',
  class extends HTMLElement {
    constructor() {
      super();

      const elemDetailsTemplate = document.getElementById('elem-details');
      const templateContent = elemDetailsTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

customElements.define('a-card',
  class extends HTMLElement {
    constructor() {
      super();

      const cardTemplate = document.getElementById('a-card');
      const templateContent = cardTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

// PAGE VIEW EFFECTS
// HTML Scroll-to-View Effect
let scrollTop = onLinkClick = () =>
{
    console.log("clicked");
    document.getElementById("return-to-top").scrollIntoView();

    //The window object calls the function:
    window.addEventListener('load', scrollTop);
    //A call to the function on click:
    document.getElementById("top").addEventListener('click', scrollTop);
}


// Service Worker Registration
window.addEventListener('load', ()=>{
  
    if('serviceWorker' in navigator){
      try {
        navigator.serviceWorker.register('./sw.js');
        console.log("Service Worker Registered");
      } catch (error) {
        console.log("Service Worker Registration Failed");
      }
    }
  
});
  









// loadScript function
// function loadScripts(url)
// {    
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = url;
//     head.appendChild(script);
// };

//loadScripts(('./main.js'));


// For Testing Purposes

//loadScripts(('./templates/a-paragraph/a-paragraph.js'));

//loadScripts('./templates/elem-details/elem-details.js');


