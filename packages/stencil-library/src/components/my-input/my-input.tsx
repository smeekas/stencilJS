import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: false,
})
export class MyInput {
  @Prop() type: 'text' | 'number';
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() message: string;
  @Prop() clearable: boolean;
  @Prop({ mutable: true }) value: string;
  @Prop() size: 'sm' | 'lg' | 'me' = 'me';
  @State() hasError: boolean = false;

  @Event() changeEvent: EventEmitter<string>;
  public nativeElement?: HTMLInputElement;

  handleChange(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.value = val;
    this.changeEvent.emit(val);
    this.hasError = !val;
  }
  clearButtonClick() {
    this.value = '';
    console.log(this.value, this.nativeElement);
    if (this.clearable && this.nativeElement) {
      console.log('CLEAR', this.nativeElement);
      console.log(this.nativeElement.value);
    }
  }
  componentDidLoad() {
    console.log(this.value);
  }
  render() {
    return (
      <Host>
        <div class="inputDiv">
          <label htmlFor={this.label}>{this.label}:</label>
          <div class={`inputContainer ${this.size}`}>
            <input
              ref={input => (this.nativeElement = input)}
              placeholder={this.placeholder}
              class={`${this.hasError ? 'error' : ''}`}
              id={this.label}
              type="text"
              value={this.value}
              onInput={(e: Event) => this.handleChange(e)}
            />
            {this.clearable && (
              <button class={this.size} onClick={() => this.clearButtonClick()}>
                X
              </button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
