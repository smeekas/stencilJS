import { Component, EventEmitter, h, Listen, State, Event } from '@stencil/core';

@Component({
  tag: 'my-web',
  shadow: true,
})
export class MyWeb {
  @State() randomNo: { forTag: string } = { forTag: 'h1' };
  @State() name: string = 'no-name';
  @Event() nameC: EventEmitter<string>;
  @Event() tagC: EventEmitter<string>;

  @Listen('tagC')
  upateState() {
    this.randomNo = { forTag: Math.random().toString() };
  }
  @Listen('nameC')
  updateName() {
    this.name = 'newName' + Math.ceil(Math.random() * 100);
  }
  render() {
    return (
      <div>
        <div>
          amazing web components hehe really?
          <button onClick={() => this.tagC.emit('name')}>Click</button>
          <h1>{this.randomNo.forTag}</h1>
        </div>
        <div>
          <button onClick={() => this.nameC.emit('name')}>change name</button>
          <h2>{this.name}</h2>
        </div>
      </div>
    );
  }
}
