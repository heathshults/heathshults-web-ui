import { newE2EPage } from '@stencil/core/testing';

describe('hs-flip-to-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hs-flip-to-code></hs-flip-to-code>');

    const element = await page.find('hs-flip-to-code');
    expect(element).toHaveClass('hydrated');
  });
});
