import React, {Component} from 'react'
import axios from 'axios'

export class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      button: true,
      errors: {
        name: false,
        email: false,
        message: false
      },
      spinner: false,
      formResult: ''
    }
    this.handleChange = this
      .handleChange
      .bind(this)
    this.submitForm = this
      .submitForm
      .bind(this)
    this.checkOnBlur = this
      .checkOnBlur
      .bind(this)
    this.checkIfEmpty = this
      .checkIfEmpty
      .bind(this)
    this.formResult = this
      .formResult
      .bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm(e) {
      e.preventDefault()
      this.setState({spinner: true})
    axios
      .post('https://revytskiyevgen.herokuapp.com/api/feedbacks', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
      .then(res =>{ 
          this.setState({spinner: false, formResult: true}) 
          console.log(res)
        })
      .catch(e =>{ 
          this.setState({spinner: false, formResult:false}) 
          console.log(e)
        })
  }
  checkIfEmpty() {
    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({button: true})
    } else {
      this.setState({button: false})
    }
  }
  checkOnBlur(e) {
    this.checkIfEmpty()

    if (e.target.name === "email") {
      const reg = new RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (e.target.value.match(reg)) {
        this.setState({
          errors: {
            name: false,
            email: false,
            message: false
          }
        })
      } else {
        if (e.target.value !== "") {
          this.setState({
            errors: {
              name: false,
              email: true,
              message: false
            },
            button: true
          })
        } else {
          this.setState({
            errors: {
              name: false,
              email: false,
              message: false
            }
          }, () => {
            this.checkIfEmpty()
          })
        }
      }
    }
  }
    formResult(res){
        if(res===''){
            return null
        }else if(res){
            return <h3 className="formMessage animate__animated animate__fadeInUp">Thanks for your interest, I'm gonna respond to you ASAP</h3>
        } else {
            return <h3 className="formMessage animate__animated animate__fadeInUp">OOPS, some server error! Please contact me through revytskiy.evgen@gmail.com</h3>
        }
  }
  render() {
    return (
      <div id="contacts" className="animate__animated animate__fadeIn">
        <div className="container">
          <h2>Contact me</h2>
          <p>If you wanna get in touch, talk to me about a project collaboration or just
            say hi, fill up the form below</p>
          <form>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              onBlur={this.checkOnBlur}
              error={`${this.state.errors.name}`}
              placeholder="Fill with your name"/>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              onBlur={this.checkOnBlur}
              error={`${this.state.errors.email}`}
              placeholder="Fill with your email"/> {(this.state.errors.email)
              ? <p className="helper animate__animated animate__fadeIn">Please, enter valid email address</p>
              : null}
            <textarea
              name="message"
              spellCheck="false"
              cols="30"
              rows="10"
              onChange={this.handleChange}
              value={this.state.message}
              error={`${this.state.errors.message}`}
              onBlur={this.checkOnBlur}
              placeholder="Message"></textarea>
            <button type="submit" disabled={this.state.button} onClick={this.submitForm}>Send {this.state.spinner
                ? <span>
                  <i className="fas fa-spinner fa-pulse"></i>
                </span>
                : null
}
            </button>
          </form>
           {this.formResult(this.state.formResult)}
        </div>
      </div>
    )
  }
}

export default Contacts
