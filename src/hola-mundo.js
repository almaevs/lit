import { LitElement, html } from 'lit-element';

    class HolaMundo extends LitElement {
        
        
        static get properties(){
            return{
                quien:{type:String}

            };
        }

        render() {
            return html`
            
            <p><b> Hola Mundo!! ${this.quien}</b> </p>
            `;

        }
    }
customElements.define('hola-mundo', HolaMundo);