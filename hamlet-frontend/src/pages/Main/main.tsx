import React from 'react';
import logo from '../../images/logo.png';
import { StyledInput, StyledHeader, StyledApp, StyledLogo, StyledLink } from './styles';

function Main() {
  return(
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <div>
          <StyledInput type="text" placeholder="코드입력"/>
          <br/>
          <StyledInput type="submit" value="Submit" style={{ backgroundColor: '#3A342F', color:"#F2E9DF" }}/>
          <br/>
          <StyledLink to="/login">로그인</StyledLink>
          &nbsp;&nbsp;&nbsp;
          <StyledLink to="/signup">회원가입</StyledLink>
        </div>
        </StyledHeader>
    </StyledApp>
  );
}

export default Main;