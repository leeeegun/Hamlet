import React, {useEffect} from 'react';
import logo from '../../images/logo.png';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';

const StyledInput = styled.input`
  width: 20rem;
  height: 2rem;
  background-color: #F2E9DF;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #FF961C;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledLogo = styled.img`
  height: 15vmin;
  pointer-events: none;
`

const StyledLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
`;


const Main = () => {

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, []);


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