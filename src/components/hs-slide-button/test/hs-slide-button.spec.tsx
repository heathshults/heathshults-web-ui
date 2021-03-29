import { newSpecPage } from '@stencil/core/testing';
import { HsSlideButton } from '../hs-slide-button';

describe('hs-slide-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HsSlideButton],
      html: `<hs-slide-button></hs-slide-button>`,
    });
    expect(page.root).toEqualHtml(`
      <hs-slide-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hs-slide-button>
    `);
  });
});
