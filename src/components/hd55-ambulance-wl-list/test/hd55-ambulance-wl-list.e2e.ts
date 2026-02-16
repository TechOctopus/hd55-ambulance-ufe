import { newE2EPage } from '@stencil/core/testing';

describe('hd55-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hd55-ambulance-wl-list></hd55-ambulance-wl-list>');

    const element = await page.find('hd55-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
