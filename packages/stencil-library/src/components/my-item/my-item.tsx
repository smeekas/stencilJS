import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-item',
  styleUrl: 'my-item.css',
  shadow: true,
})
export class MyItem {
  @Prop() label: string;
  @Prop() required: string;
  render() {
    return (
      <Host>
        <p>{this.label} {this.required}</p>
        <slot>
          <p>no input</p>
        </slot>
      </Host>
    );
  }
}
