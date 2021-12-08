import './index.css'

const PasswordItem = props => {
  const {eachlist, showpasswords, deletingPasswords} = props
  const {id, website, username, password} = eachlist
  const onclickingdeletngbutton = () => {
    deletingPasswords(id)
  }
  return (
    <li className="saved-password-card">
      <div className="profile-name-logo">
        <p className="profile-name">{username.slice(0, 1).toUpperCase()}</p>
      </div>
      <div className="website-password-delete-container">
        <div className="website-password-container">
          <p className="website-heading-style">{website}</p>
          <p className="username-heading-style">{username}</p>
          {showpasswords && (
            <p className="password-heading-style">{password}</p>
          )}
          {!showpasswords && (
            <img
              className="stars-style"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
        <button
          className="delete-button-style"
          onClick={onclickingdeletngbutton}
          type="button"
          testid="delete"
        >
          <img
            className="delete-button-image-style"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
