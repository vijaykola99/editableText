import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {
    input: true,
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeButton = () => {
    const {userInput} = this.state
    if (userInput !== '') {
      this.setState(prevState => ({input: !prevState.input}))
    }
  }

  renderInput = () => {
    const {userInput} = this.state
    return (
      <input
        className="input"
        type="text"
        onChange={this.onChangeUserInput}
        value={userInput}
      />
    )
  }

  render() {
    const {input, userInput} = this.state
    return (
      <div className="app-background">
        <div className="editable-background">
          <h1 className="editable-heading">Editable Text input</h1>
          <div className="input-paragraph">
            {input ? (
              this.renderInput()
            ) : (
              <p className="paragraph">{userInput}</p>
            )}
            <button
              className="button"
              type="button"
              onClick={this.onChangeButton}
            >
              {input ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
