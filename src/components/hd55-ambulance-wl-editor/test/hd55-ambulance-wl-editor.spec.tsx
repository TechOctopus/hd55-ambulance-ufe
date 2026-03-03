import { newSpecPage } from '@stencil/core/testing';
import { Hd55AmbulanceWlEditor } from '../hd55-ambulance-wl-editor';

describe('hd55-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Hd55AmbulanceWlEditor],
      html: `<hd55-ambulance-wl-editor></hd55-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <hd55-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hd55-ambulance-wl-editor>
    `);
  });
});
