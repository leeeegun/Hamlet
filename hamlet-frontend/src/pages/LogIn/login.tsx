import React from 'react';
import logo from '../../logo2.png';
import { StyledLogin, StyledLabel, StyledForm, Styledfieldset, StyledInput, StyledSubmit, StyledLogo, StyledButton } from './styles';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <StyledLogin>
      <StyledForm>
        <Styledfieldset>
          <StyledLogo src={logo} alt="logo"/>
        </Styledfieldset>
        <div>
          <StyledLabel>Id</StyledLabel>
          <StyledInput type="text" placeholder='Id'/>
        </div>
        <div>
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="text" placeholder='Password'/>
        </div>
        <StyledSubmit type="submit" value='로그인' />
        <Link to="/">
          <StyledButton>돌아가기</StyledButton>
        </Link>
      </StyledForm>
    </StyledLogin>
  );
}
export default Login;