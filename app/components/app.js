import React from 'react';

export default class App extends React.Component {

  handleSubmit (event) {
    event.preventDefault();
  }
  handleChange (event) {
    var text = event.target.value;
    this.setState()
  }
  render() {
    return <div>
            <p>Basic Form</p>
            <form onSubmit = {this.handleSubmit}>
              <input onChange = {this.handleChange}/>
              <button>Submit</button>
            </form>
          </div>;
  }
}
