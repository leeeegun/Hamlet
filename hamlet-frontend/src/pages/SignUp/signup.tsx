import React from 'react';
import logo from '../../logo2.png';
import { StyledSignup, StyledLabel, StyledForm, Styledfieldset, StyledInput, StyledSubmit, StyledLogo, StyledButton } from './styles';
import { Link } from 'react-router-dom';

function Signup() {
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
        <StyledSubmit type="submit" value='회원가입' />
        <Link to="/">
          <StyledButton>돌아가기</StyledButton>
        </Link>
      </StyledForm>
    </StyledSignup>
  );
}

export default Signup;