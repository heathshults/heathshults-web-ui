import { newSpecPage } from '@stencil/core/testing';
import { HS3dRotator } from '../hs-3d-rotator';

describe('hs-3d-rotator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HS3dRotator],
      html: `<hs-3d-rotator></hs-3d-rotator>`,
    });
    expect(page.root).toEqualHtml(`
      <hs-3d-rotator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hs-3d-rotator>
    `);
  });
});
