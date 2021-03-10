import { newE2EPage } from '@stencil/core/testing';

describe('hs-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hs-code></hs-code>');

    const element = await page.find('hs-code');
    expect(element).toHaveClass('hydrated');
  });
});
