import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  @State() newName: string = 'newName';
  // @Prop() fnCall: (name: string) => void;
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  componentDidLoad() {
    setInterval(() => {
      this.newName = Math.random().toString();
      // this.fnCall(this.newName);
    }, 2000);
  }
  render() {
    return (
      <div>
        <div>Hello, World! I'm {this.getText()}</div>
        <div>{this.newName}</div>
        {/* <button onClick={() => this.fnCall(this.newName)}>Update it</button> */}
        <slot>
          <h1>NO</h1>
        </slot>
      </div>
    );
  }
}
