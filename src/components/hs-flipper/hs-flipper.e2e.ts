import { newE2EPage } from '@stencil/core/testing';

describe('hs-flipper', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hs-flipper></hs-flipper>');
    const element = await page.find('hs-flipper');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
