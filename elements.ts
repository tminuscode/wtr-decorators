import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
    static styles = css`p { color: blue }`;

    @property({ type: String })
    name: string = "Sombeody"

    render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }
}

@customElement('elaborate-greeting')
export class ElaborateGreeting extends SimpleGreeting {
    @property({ type: String })
    salutation: string = "Mr."

    render() {
        return html`<p>Hello, ${this.salutation} ${this.name}!</p>`;
    }
}
