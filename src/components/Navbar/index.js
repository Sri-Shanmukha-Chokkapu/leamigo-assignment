import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

const Navbar = props => {
  const handleLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dpkxg8atl/image/upload/v1690113823/round_2_w9vyfz.png"
          alt="Logo"
          className="website-logo"
        />
      </div>
      <div className="navbar-logout">
        <button type="button" className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
