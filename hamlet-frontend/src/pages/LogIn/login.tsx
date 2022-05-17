import React, {useEffect, useState} from 'react';
import logo from '../../images/logo2.png';
import {Router, useNavigate} from "react-router-dom";
import styled from 'styled-components';
import Swal from "sweetalert2";

const StyledLogin = styled.div`
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

const StyledButton = styled.button`
  margin-top: 0.5em;
  width: 60%;
  height: 3em;
  border-radius: 15px;
  color: black;
  background-color: #FFFBF5;
`;
//30 7

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


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login() {
  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 성공 메세지 출력
  useEffect(() => {
    setSuccessMessage("");
  }, [successMessage]);

  // 실패 메세지 출력
  useEffect(() => {
    setErrorMessage("");
  }, [errorMessage]);

  // 로그인 로직
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    await submitLogin();
    await initializeData();
  };

  // 로그인 입력 정보의 상태들 초기화
  const initializeData = async () => {
    setUserEmail("");
    setUserPassword("");
  };

  // 로그인 POST 요청
  const submitLogin = async () => {
    fetch(process.env.REACT_APP_SERVER_URL + `/auth`, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
        .then((response) => {
          // 참고: https://stackoverflow.com/questions/49725012/handling-response-status-using-fetch-in-react-js/49725163
          if (!response.ok) throw new Error(`${response.status}`);
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("token", data.accessToken);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "로그인 성공!",
          });
          setSuccessMessage("로그인 성공!");
          navigate("/");
        })
        .catch((error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "로그인 실패..",
          });
          setErrorMessage(`로그인 실패 사유 : ${error}`);
        });
  };


  return (
    <StyledLogin>
      <StyledForm onSubmit={handleSubmit}>
        <Styledfieldset>
          <StyledLogo src={logo} alt="logo"/>
        </Styledfieldset>
        <StyledDiv>
          <StyledInput type="text"
                       id="userid"
                       onChange={(e) => setUserEmail(e.target.value)}
                       value={userEmail}
                       placeholder='Email'/>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="password"
                       id="userPassword"
                       onChange={(e) => setUserPassword(e.target.value)}
                       value={userPassword}
                       placeholder='Password'/>
        </StyledDiv>
        <StyledDiv>
          <StyledSubmit type="submit" value='로그인' />
          <StyledButton onClick={ () => {navigate('/')}}>돌아가기</StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledLogin>
  );
}
export default Login;