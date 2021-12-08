import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordPage extends Component {
  state = {
    initiallist: [],
    website: '',
    username: '',
    password: '',
    showpasswords: false,
    searchInput: '',
  }

  onchangingwebsite = event => {
    this.setState({website: event.target.value})
  }

  onchangingusername = event => {
    this.setState({username: event.target.value})
  }

  onchangingpassword = event => {
    this.setState({password: event.target.value})
  }

  onClickingShowPasswords = () => {
    this.setState(prevState => ({
      showpasswords: !prevState.showpasswords,
    }))
  }

  onChecking = event => {
    if (event.target.value === 'checkbox') {
      this.setState(prevState => ({
        showpasswords: !prevState.showpasswords,
      }))
    }
  }

  onclickingAddButton = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    if (website !== '' && username !== '' && password !== '') {
      this.setState(prevState => ({
        initiallist: [
          ...prevState.initiallist,
          {website, username, password, id: v4()},
        ],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  deletingPasswords = id => {
    const {initiallist} = this.state
    const filteredist = initiallist.filter(eachlist => eachlist.id !== id)
    this.setState({initiallist: filteredist})
  }

  onsearchingpasswords = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {
      initiallist,
      showpasswords,
      searchInput,
      website,
      password,
      username,
    } = this.state

    const searchedInput = initiallist.filter(eachlist =>
      eachlist.website.toLowerCase().includes(searchInput),
    )
    return (
      <div className="background-card">
        <img
          className="logo-style"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="input-field-card">
          <form className="input-field-container">
            <h1 className="heading-style">Add New Password</h1>
            <div className="single-input-card">
              <img
                className="input-logo-style"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                onChange={this.onchangingwebsite}
                className="website-input-style"
                type="text"
                placeholder="Enter Website"
                value={website}
              />
            </div>
            <div className="single-input-card">
              <img
                className="input-logo-style"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                onChange={this.onchangingusername}
                className="website-input-style"
                type="text"
                placeholder="Enter Username"
                value={username}
              />
            </div>
            <div className="single-input-card">
              <img
                className="input-logo-style"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
              />
              <input
                onChange={this.onchangingpassword}
                className="website-input-style"
                type="password"
                placeholder="Enter Password"
                value={password}
              />
            </div>
            <button
              onClick={this.onclickingAddButton}
              className="button-style"
              type="submit"
            >
              Add
            </button>
          </form>
          <img
            className="password-manager-image-style"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
          />
          <img
            className="password-manager-image-sm-style"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />
        </div>
        <div className="saved-passwords-card">
          <div className="search-bar-container">
            <div className="your-passwords-container">
              <h1 className="your-passwords-heading-style">Your Passwords</h1>
              <p className="your-passwords-number-style">
                {searchedInput.length}
              </p>
            </div>
            <div className="search-bar-card">
              <img
                className="search-logo-style"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                onChange={this.onsearchingpasswords}
                className="search-input-style"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="showed-passwords-container">
            <input
              className="show-passwords-button"
              type="checkbox"
              onChange={this.onChecking}
              value="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="show-passwords-style">
              Show passwords
            </label>
          </div>
          <ul className="saved-passwords-container">
            {searchedInput.map(eachlist => (
              <PasswordItem
                eachlist={eachlist}
                showpasswords={showpasswords}
                deletingPasswords={this.deletingPasswords}
                key={eachlist.id}
              />
            ))}
          </ul>
          {searchedInput.length === 0 && (
            <div className="no-passwords-container">
              <img
                className="no-passwords-image-style"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p className="heading-style">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordPage
