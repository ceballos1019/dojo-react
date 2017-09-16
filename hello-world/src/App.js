import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText : '',
      outputText : ''
    }

    this.textChanged = this.textChanged.bind(this) //Enlazar el constructor con la función
  }

  textChanged(event) {
    var name = event.target.value
    this.setState({outputText: name})
    this.setState({inputText: name})
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.textChanged} value={this.state.inputText}/>
        <br/>
        <a>Hola {this.state.outputText} cómo estas?</a>
      </div>
    )
  }

}

export default App
