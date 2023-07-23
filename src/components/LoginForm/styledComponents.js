import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #cae9fb;
`

export const WebsiteImage = styled.img`
  width: 50vw;
  height: auto;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin: auto;
  height: 334px;
  width: 325px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 10px;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 30px;
  align-self: center;
`

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`

export const ErrorMsg = styled.div`
  align-self: start;
  font-size: 12px;
  font-weight: 500;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0284c7;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
