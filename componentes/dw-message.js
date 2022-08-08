import {LitElement, html,css} from 'lit-element';

    class DwMessage extends LitElement{
        static styles=css`
            :host{
                display:block;
                border:1px solid red;
                padding:10px;
            }
            div {
                    background-color: #fcc;
                }
            p{
                margin-bottom:0;
            }
            
        `
        render(){
            return html`<div>Hola lit</div>
                <p><b> Esto también va aquí</b></p>
            `;
        }


    }
customElements.define('dw-message',DwMessage)