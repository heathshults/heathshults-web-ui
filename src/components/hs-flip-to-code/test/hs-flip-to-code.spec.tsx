import { newSpecPage } from '@stencil/core/testing';
import { HsFlipToCode } from '../hs-flip-to-code';

describe('hs-flip-to-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HsFlipToCode],
      html: `<hs-flip-to-code></hs-flip-to-code>`,
    });
    expect(page.root).toEqualHtml(`
      <hs-flip-to-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hs-flip-to-code>
    `);
  });
});
