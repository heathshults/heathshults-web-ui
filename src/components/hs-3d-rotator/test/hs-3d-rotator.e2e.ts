import { newE2EPage } from '@stencil/core/testing';

describe('hs-3d-rotator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hs-3d-rotator></hs-3d-rotator>');

    const element = await page.find('hs-3d-rotator');
    expect(element).toHaveClass('hydrated');
  });
});
