import { newE2EPage } from '@stencil/core/testing';

describe('hd55-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hd55-ambulance-wl-app></hd55-ambulance-wl-app>');

    const element = await page.find('hd55-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
