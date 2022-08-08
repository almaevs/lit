import { LitElement, html } from "lit";
class MyWebcomponent extends LitElement {
    static get properties() {
      return {
        object: { type: Object },
      };
    }
   
    constructor() {
      super();
      this.object = { myProp: "Initial value" };
    }
   
    handleClick() {
      this.object.myProp = "New value";
    }
    render() {
      return html`<h2>${this.object.myProp}</h2>
        <button @click=${this.handleClick}>Click Me!</button> `;
    }
   }
   
   customElements.define('my-web', MyWebcomponent);