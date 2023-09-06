import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    fMsg: '',
    lMsg: '',
    isRegistrationSuccess: false,
  }

  onClickAnotherResponse = () => {
    this.setState({
      isRegistrationSuccess: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName, fMsg, lMsg} = this.state
    if (firstName === '') {
      this.setState({
        fMsg: 'Required',
      })
    }
    if (lastName === '') {
      this.setState({
        lMsg: 'Required',
      })
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({
        isRegistrationSuccess: true,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({
        fMsg: 'Required',
      })
    } else {
      this.setState({
        fMsg: '',
      })
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({
        lMsg: 'Required',
      })
    } else {
      this.setState({
        lMsg: '',
      })
    }
  }

  returnSuccessForm = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  returnRegistrationForm = () => {
    const {firstName, lastName, fMsg, lMsg} = this.state
    return (
      <>
        <h1>Registration</h1>
        <div className="first-container">
          <label htmlFor="firstname">FIRST NAME</label>
          <input
            type="text"
            id="firstname"
            placeholder="First name"
            className="input-element"
            onBlur={this.onBlurFirstName}
            onChange={this.onChangeFirstName}
          />
          <p className="error-msg">{fMsg}</p>
        </div>
        <div className="first-container">
          <label htmlFor="lastname">LAST NAME</label>
          <input
            type="text"
            id="lastname"
            placeholder="Last name"
            className="input-element"
            onBlur={this.onBlurLastName}
            onChange={this.onChangeLastName}
          />
          <p className="error-msg">{lMsg}</p>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </>
    )
  }

  render() {
    const {firstName, lastName, fMsg, lMsg, isRegistrationSuccess} = this.state
    console.log('first name =', firstName)
    console.log('last name =', lastName)
    return (
      <div className="registration-container">
        <form onSubmit={this.onSubmitForm} className="form-container">
          {isRegistrationSuccess
            ? this.returnSuccessForm()
            : this.returnRegistrationForm()}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
