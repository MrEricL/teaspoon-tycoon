import React, { Component } from 'react';

/* props: id, type, label, value, set, onchange, style
*/
export class TextBox extends Component {
  render() {
    return (<div id={this.props.id}>
      <label htmlFor={this.props.id}>{this.props.value ? this.props.value : this.props.label}</label>
      <input id={this.props.name} type={this.props.type} name={this.props.name} value={this.props.value} defaultChecked={this.props.set} onChange={this.props.onchange} style={this.props.style} />
    </div>);
  }
}
