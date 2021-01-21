import { newE2EPage } from '@stencil/core/testing';

describe('hs-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hs-slider></hs-slider>');
    const element = await page.find('hs-slider');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
