import { expect, fixture } from '@open-wc/testing'
import  './elements.js'

describe('elaborate greeting', () => {
    it('greets', async () => {
        const el = await fixture('<elaborate-greeting name="Robot"></elaborate-greeting>')

        expect(el.shadowRoot?.textContent).to.equal('Hello, Mr. Robot!')
    })
});
