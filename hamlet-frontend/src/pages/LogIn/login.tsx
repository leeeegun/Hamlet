import React from 'react';
import logo from '../../images/logo2.png';
import { StyledLogin, StyledLabel, StyledForm, Styledfieldset, StyledInput, StyledSubmit, StyledButton, StyledLogo, StyledDiv } from './styles';
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
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
        <hr/>
        <StyledDiv>
          <StyledSubmit type="submit" value='로그인' />
          <StyledButton onClick={ () => {navigate('/')}}>돌아가기</StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledLogin>
  );
}
export default Login;