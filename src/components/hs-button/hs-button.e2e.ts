import { newE2EPage } from '@stencil/core/testing';

describe('hs-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hs-button></hs-button>');
    const element = await page.find('hs-button');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
