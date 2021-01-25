import {newE2EPage} from '@stencil/core/testing';

describe('hs-image-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hs-image-view></hs-image-view>');
    const element = await page.find('hs-image-view');
    expect(element).toHaveClass('hydrated');
  });
  {
    cursor;
  }
});
