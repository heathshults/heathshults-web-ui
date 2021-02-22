import {newE2EPage} from '@stencil/core/testing';

describe('hs-fetcher', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hs-fetcher></hs-fetcher>');
    const element = await page.find('hs-fetcher');
    expect(element).toHaveClass('hydrated');
  });

});
