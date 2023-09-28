import { newE2EPage } from '@stencil/core/testing';

describe('my-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-item></my-item>');

    const element = await page.find('my-item');
    expect(element).toHaveClass('hydrated');
  });
});
