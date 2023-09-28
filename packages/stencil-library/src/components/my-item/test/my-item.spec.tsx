import { newSpecPage } from '@stencil/core/testing';
import { MyItem } from '../my-item';

describe('my-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyItem],
      html: `<my-item></my-item>`,
    });
    expect(page.root).toEqualHtml(`
      <my-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-item>
    `);
  });
});
