import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  WebsiteImage,
  Logo,
  LoginFormContainer,
  InputFieldContainer,
  Label,
  InputField,
  ErrorMsg,
  LoginButton,
} from './styledComponents'

const LoginForm = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    setUsername('')
    setPassword('')
  }

  const onSubmitFailure = error => {
    setErrorMsg(error)
    setIsInvalid(prevState => !prevState)
  }

  const onSubmitLoginForm = async event => {
    event.preventDefault()
    const credentials = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const renderPasswordField = () => (
    <>
      <Label htmlFor="password">Password*</Label>
      <InputField
        type="password"
        value={password}
        id="password"
        placeholder="Password: rahul@2021"
        onChange={onChangePassword}
      />
    </>
  )

  const renderUsernameField = () => (
    <>
      <Label htmlFor="username">Username*</Label>
      <InputField
        type="text"
        value={username}
        id="username"
        placeholder="Username: rahul"
        onChange={onChangeUsername}
      />
    </>
  )

  const checkJwtToken = () => {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return true
    }
    return false
  }

  return checkJwtToken() ? (
    <Redirect to="/" />
  ) : (
    <LoginContainer>
      <WebsiteImage
        src="https://res.cloudinary.com/dpkxg8atl/image/upload/v1690112994/logo_pkxyie.png"
        alt="login website logo"
      />
      <LoginFormContainer onSubmit={onSubmitLoginForm}>
        <Logo
          src="https://res.cloudinary.com/dpkxg8atl/image/upload/v1690113823/round_2_w9vyfz.png"
          alt="login website logo"
        />
        <InputFieldContainer>{renderUsernameField()}</InputFieldContainer>
        <InputFieldContainer>{renderPasswordField()}</InputFieldContainer>
        {isInvalid && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <LoginButton type="submit">Login</LoginButton>
      </LoginFormContainer>
    </LoginContainer>
  )
}

export default LoginForm
