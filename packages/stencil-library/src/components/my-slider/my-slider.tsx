import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-slider',
  styleUrl: 'my-slider.css',
  shadow: false,
})
export class MySlider {
  @Prop() min: string;
  @Prop() max: string;
  @Prop() step: number;
  @Prop() show: boolean;
  @Prop({ mutable: true, reflect: true }) value: string = '';
  @Event() changeEvent: EventEmitter<string>;
  @Event() mouseUpEvent: EventEmitter<string>;
  handleInputChange(e: Event) {
    const element = e.target as HTMLInputElement;
    this.value = element.value;
    this.changeEvent.emit(element.value);
  }
  handleMouseUp(e: Event) {
    const element = e.target as HTMLInputElement;

    this.mouseUpEvent.emit(element.value);
  }

  render() {
    return (
      <Host>
        <div class="inputDiv">
          {this.min && <span>{this.min}</span>}
          <input onInput={e => this.handleInputChange(e)} onChange={e => this.handleMouseUp(e)} type="range" min={this.min} max={this.max} step={this.step} value={this.value} />
          {this.max && <span>{this.max}</span>}
          {this.show && <div>{this.value}</div>}
        </div>
      </Host>
    );
  }
}
