import { newSpecPage } from '@stencil/core/testing';
import { HsCarousel } from '../hs-carousel';

describe('hs-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HsCarousel],
      html: `<hs-carousel></hs-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <hs-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hs-carousel>
    `);
  });
});
