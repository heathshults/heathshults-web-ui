import { newE2EPage } from '@stencil/core/testing';

describe('hs-slide-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hs-slide-button></hs-slide-button>');

    const element = await page.find('hs-slide-button');
    expect(element).toHaveClass('hydrated');
  });
});
