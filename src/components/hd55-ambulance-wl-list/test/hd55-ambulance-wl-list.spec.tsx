import { newSpecPage } from '@stencil/core/testing';
import { Hd55AmbulanceWlList } from '../hd55-ambulance-wl-list';

describe('hd55-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Hd55AmbulanceWlList],
      html: `<hd55-ambulance-wl-list></hd55-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <hd55-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hd55-ambulance-wl-list>
    `);
  });
});
