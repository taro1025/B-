import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { NoDecoLink } from '../components/NoDecoLink';

import { login } from '../apis/login';
import { loginProps } from "../interfaces"


const FormWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
`;

const TextFieldWrapper = styled.div`
  margin-top: 15px;
`

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;




export const Login = (props: loginProps) => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (event: any): void => {
    login({
      email: email,
      password: password
    }, props)

    event.preventDefault()
  }

  //開発用ユーザー
  //email    titi#{1=10}@gmail.com
  //password testes1234
  return (
    <div>
      <p>ログイン</p>
      <form>

        <FormWrapper>
          <TextFieldWrapper>
            <TextField
              id="standard-search"
              label="Email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </TextFieldWrapper>
          <TextFieldWrapper>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </TextFieldWrapper>
          <ButtonWrapper>
            <Button variant="contained" color="primary" type="submit"
              onClick={handleSubmit}>
              login
             </Button>
            <NoDecoLink to={'/signup'}><p>Sign up?</p></NoDecoLink>
          </ButtonWrapper>
        </FormWrapper>

      </form>
    </div>
  )
}
