import { newSpecPage } from '@stencil/core/testing';
import { HsCode } from '../hs-code';

describe('hs-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HsCode],
      html: `<hs-code></hs-code>`,
    });
    expect(page.root).toEqualHtml(`
      <hs-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hs-code>
    `);
  });
});
