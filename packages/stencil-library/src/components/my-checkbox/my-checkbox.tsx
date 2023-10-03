import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-checkbox',
  styleUrl: 'my-checkbox.css',
  shadow: false,
})
export class MyCheckbox {
  @Prop() label: string;
  @Prop({ mutable: true }) checked: boolean;
  @Prop() disabled: boolean;
  @Event() changeEvent: EventEmitter<boolean>;
  @Event() blurEvent: EventEmitter<boolean>;

  onInputChange() {
    this.checked = !this.checked;
    this.changeEvent.emit(this.checked);
  }
  onInputBlur() {
    this.blurEvent.emit(true);
  }
  render() {
    return (
      <Host>
        <div class="inputDivCheckbox">
          <input onBlur={() => this.onInputBlur()} onInput={() => this.onInputChange()} disabled={this.disabled} id="check" type="checkbox" checked={this.checked} />
          <label onClick={() => !this.disabled && this.onInputChange()} htmlfor="check">
            {this.label}
          </label>
        </div>
      </Host>
    );
  }
}
