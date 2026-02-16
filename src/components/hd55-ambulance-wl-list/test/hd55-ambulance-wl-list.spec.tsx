import { newSpecPage } from '@stencil/core/testing';
import { Hd55AmbulanceWlList } from '../hd55-ambulance-wl-list';

describe('hd55-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Hd55AmbulanceWlList],
      html: `<hd55-ambulance-wl-list></hd55-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as Hd55AmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
