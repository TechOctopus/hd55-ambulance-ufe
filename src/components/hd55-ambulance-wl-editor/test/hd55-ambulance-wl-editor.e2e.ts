import { newE2EPage } from '@stencil/core/testing';

describe('hd55-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hd55-ambulance-wl-editor></hd55-ambulance-wl-editor>');

    const element = await page.find('hd55-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
