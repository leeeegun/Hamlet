import React from 'react';
import logo from '../../logo2.png';
import { StyledSignup, StyledLabel, StyledForm, Styledfieldset, StyledInput, StyledSubmit, StyledLogo, StyledDiv, StyledButton } from './styles';
import { useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();
  return (
    <StyledSignup>
      <StyledForm>
        <Styledfieldset>
          <StyledLogo src={logo} alt="logo" />
        </Styledfieldset>
        <div className=''>
          <StyledLabel>Id</StyledLabel>
          <StyledInput type="text" placeholder='Id' />
        </div>
        <div>
          <StyledLabel>NickName</StyledLabel>
          <StyledInput type="text" placeholder='NickName' />
        </div>
        <div>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="text" placeholder='Email' />
        </div>
        <div>
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="text" placeholder='Password' />
        </div>
        <div>
          <StyledLabel>Confirm Password</StyledLabel>
          <StyledInput type="text" placeholder='Confirm Password' />
        </div>
        <hr />
        <StyledDiv>
          <StyledSubmit type="submit" value='로그인' />
          <StyledButton onClick={ () => {navigate('/')}}>돌아가기</StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledSignup>
  );
}

export default Signup;