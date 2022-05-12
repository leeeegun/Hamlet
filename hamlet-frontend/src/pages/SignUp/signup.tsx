import React from 'react';
import logo from '../../images/logo2.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSignup = styled.div`
  background-color: #FF961C;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
  width: 15em;
  min-height: 15em;
  background-color: #F2E9DF;
  font-size: calc(10px + 2vmin);
  border-radius: 15px;
  padding: 0 0 1em 0;
`;

const Styledfieldset = styled.div`
  height: 3.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4F3F28;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  margin-top: 1em;
  width: 80%;
  height: 2em;
  background-color: #F2E9DF;
  border-radius: 15px;
  font-size: 20px;
  text-align: center;
`;

const StyledSubmit = styled.input`
  margin-top: 2em;
  width: 60%;
  height: 3em;
  border-radius: 15px;
  color: white;
  background-color: #4F3F28;
`;

const StyledLogo = styled.img`
  width: 10em;  
  height: 2.5em;
  pointer-events: none;
`;

const StyledLabel = styled.label<{ propsdata: boolean }>`
  margin-top: 0.5em;
  color: black;
  font-size: 0.6em;
  color: #EF8100;
  visibility: ${props => props.propsdata ? "visible": "collapse"}
`;

const StyledButton = styled.button`
  margin-top: 0.5em;
  width: 60%;
  height: 3em;
  border-radius: 15px;
  color: black;
  background-color: #FFFBF5;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Signup() {
  let navigate = useNavigate();
  return (
    <StyledSignup>
      <StyledForm>
        <Styledfieldset>
          <StyledLogo src={logo} alt="logo" />
        </Styledfieldset>
        <StyledDiv>
          <StyledInput type="text" placeholder='Id' />
          <StyledLabel propsdata={true}>* 올바른 Id를 입력해주세요</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="text" placeholder='NickName' />
          <StyledLabel propsdata={true}>* 올바른 NickName을 입력해주세요</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="text" placeholder='Email' />
          <StyledLabel propsdata={true}>* 올바른 Email을 입력해주세요</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="text" placeholder='Password' />
          <StyledLabel propsdata={true}>* 올바른 PW를 입력해주세요</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="text" placeholder='Confirm Password' />
          <StyledLabel propsdata={true}>* 비밀번호와 일치하지 않습니다</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledSubmit type="submit" value='로그인' />
          <StyledButton onClick={ () => {navigate('/')}}>돌아가기</StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledSignup>
  );
}

export default Signup;