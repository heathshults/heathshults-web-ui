import { newE2EPage } from '@stencil/core/testing';

describe('hs-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hs-carousel></hs-carousel>');

    const element = await page.find('hs-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
