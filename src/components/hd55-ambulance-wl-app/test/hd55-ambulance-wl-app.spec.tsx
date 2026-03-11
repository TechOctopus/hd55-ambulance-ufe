import { newSpecPage } from '@stencil/core/testing';
import { Hd55AmbulanceWlApp } from '../hd55-ambulance-wl-app';

describe('hd55-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Hd55AmbulanceWlApp],
      html: `<hd55-ambulance-wl-app base-path="/"></hd55-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('hd55-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Hd55AmbulanceWlApp],
      html: `<hd55-ambulance-wl-app base-path="/ambulance-wl/"></hd55-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('hd55-ambulance-wl-list');
  });
});
