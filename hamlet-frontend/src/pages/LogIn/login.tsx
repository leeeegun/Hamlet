import React, {useEffect, useState} from 'react';
import logo from '../../images/logo2.png';
import {useNavigate} from "react-router-dom";
import { StyledDiv, StyledLogin, StyledForm, StyledLogo, StyledButton,StyledSubmit, StyledInput, Styledfieldset } from './styles';
import Swal from "sweetalert2";



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