import React, {useCallback, useEffect, useState} from 'react';
import logo from '../../images/logo2.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from "sweetalert2";
import login from "../LogIn/login";

const EMAIL_REGEX = /[0-9a-zA-Z]+[@]{1}[0-9a-zA-Z]+[.]{1}[a-zA-Z]+/;
const PW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$*]).{8,24}$/;

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

const StyledSpan = styled.span`
  font-size: 1em;
  color: #EF8100;
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

  const [userEmail, setUserEmail] = useState("");
  const [validUserEmail, setValidUserEmail] = useState(false);
  const [confirmedUserEmail, setConfirmedUserEmail] = useState(false);

  const [userNickname, setUserNickname] = useState("");

  const [userPassword, setUserPassword] = useState("");
  const [validUserPassword, setValidUserPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [formReady, setFormReady] = useState(false);
  const [successMessage, setSuccessMessage] : any = useState("");

  // 아이디 중복확인
  const handleIdCheck = async (e : any) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_SERVER_URL + `/users/${userEmail}/exists`)
        .then((response) => response.json())
        .then((data) => {
          setConfirmedUserEmail(data);
        });
  };


  // 회원가입 로직
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await submitRegistration();
    await initializeData();
  };


  // 회원가입 후 데이터 초기화
  const initializeData = async () => {
    setUserEmail("");
    setUserNickname("");
    setUserPassword("");
  };

  const userConfirmedId = (e : any) => {
    e.preventDefault();
    const idNavigator = document.getElementById("id-navigator");
    if (!idNavigator) return;
    idNavigator.classList.toggle("hide");
    idNavigator.classList.toggle("valid");
    const idInput = document.getElementById("userEmail") as HTMLInputElement;
    if (!idInput) return;
    idInput.disabled = true;
  };


  // 회원가입 POST 요청
  const submitRegistration = async () => {
    fetch(process.env.REACT_APP_SERVER_URL + `/users`, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        nickname: userNickname,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
        .then((response) => {
          // if (!response.ok) throw new Error(response.status);
          // else return response.json();
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setSuccessMessage(data);
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error);
        });
  };

  useEffect(() => {
    if (validUserEmail && userEmail) {
      fetch(process.env.REACT_APP_SERVER_URL + `/users/${userEmail}/exists`)
          .then((response) => response.json())
          .then((data) => {
            setConfirmedUserEmail(data);
          });
    }
  }, [validUserEmail, userEmail]);

  // 회원가입 버튼 활성화 조건
  useEffect(() => {
    if (
        confirmedUserEmail &&
        validUserEmail &&
        validMatchPassword &&
        userNickname &&
        userEmail &&
        validUserEmail
    ) {
      setFormReady(true);
    }
  }, [
    confirmedUserEmail,
    validMatchPassword,
    userNickname,
  ]);

  // 이메일 조건 충족 여부 확인
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    const result = EMAIL_REGEX.test(userEmail);
    setValidUserEmail(result);
  }, [userEmail]);

  // 이메일 다 지우면 이메일 state 초기화
  useEffect(() => {
    if (!userEmail) {
      setUserEmail("");
      setValidUserEmail(false);
      setConfirmedUserEmail(false);
    }
    if (validUserEmail === false) {
      setConfirmedUserEmail(false);
    }
  }, [userEmail]);

  // 비밀번호와 비밀번호 확인 일치 여부 판단
  useEffect(() => {
    const result = PW_REGEX.test(userPassword);
    setValidUserPassword(result);
    const match = userPassword === matchPassword;
    setValidMatchPassword(match);
  }, [userPassword, matchPassword]);

  // 비밀번호 다 지우면 비밀번화 확인 값도 초기화
  useEffect(() => {
    if (!userPassword) {
      setMatchPassword("");
    }
  }, [userPassword]);

  //성공 및 실패했을때
  useEffect(() => {
    if (successMessage.statusCode === 201) {
      Swal.fire({
        title: "<strong>회원가입 완료!</strong>",
        html: "이제부터 모든 기능을 사용할 수 있어요!",
        icon: "success",
      });
      navigate("/");
    }
    if (successMessage.statusCode === 400) {
      Swal.fire({
        title: "<strong>회원가입 실패!</strong>",
        html: "오류가 발생했어요 😅",
        icon: "error",
      });
    }
    setSuccessMessage("");
  }, [successMessage]);

  // 회원가입 실패 메세지 반환
  useEffect(() => {
    setErrorMessage("");
  }, [errorMessage]);


  // .get(process.env.REACT_APP_SERVER_URL + '/user', {})

  return (
    <StyledSignup>
      <StyledForm onSubmit={handleSubmit}>
        <Styledfieldset>
          <StyledLogo src={logo} alt="logo" />
        </Styledfieldset>
        <StyledDiv>
          <StyledInput type="text"
                       id="userEmail"
                       onChange={(e) => setUserEmail(e.target.value)}
                       autoComplete="off"
                       value={userEmail}
                       placeholder='Email' />
          <StyledLabel htmlFor="userEmail" propsdata={true}>
            <StyledSpan className={validUserEmail || !userEmail ? "hide" : "invalid"}>
              &#9746; 올바른 형식의 Email을 작성해주세요!
            </StyledSpan>
            <StyledSpan
                className={confirmedUserEmail ? "valid" : "hide"}
                id="id-navigator"
                role="note"
            >
                &#9745;사용 가능한 아이디입니다!
                <p>
                  사용하시겠습니까?{" "}
                  <button
                      onClick={(e) => userConfirmedId(e)}
                      className="hover:cursor-pointer"
                  >
                    사용하기
                  </button>
                </p>
              </StyledSpan>
            <StyledSpan
                role="note"
                className={!confirmedUserEmail && validUserEmail ? "valid" : "hide"}
            >
                이미 사용중인 이메일입니다.
              </StyledSpan>
          </StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="text"
                       id="userNickName"
                       onChange={(e) => setUserNickname(e.target.value)}
                       autoComplete="off"
                       value={userNickname}
                       placeholder='Nickname' />
          <StyledLabel propsdata={true}>
          </StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="password"
                       id="userPassword"
                       onChange={(e) => setUserPassword(e.target.value)}
                       value={userPassword}
                       placeholder='Password' />
          <StyledLabel propsdata={true}>
            <StyledSpan
                className={
                  validUserPassword || !userPassword ? "hide" : "invalid"
                }
            >
                &#9746; 대소문자 최소 1개씩, 숫자, 특수문자를 혼합하여
                <br />
                8~24내로 작성해주세요!
              </StyledSpan>
            <StyledSpan
                role="note"
                className={validUserPassword ? "valid" : "hide"}
            >
               &#9745; 사용 가능한 비밀번호입니다.
            </StyledSpan>
          </StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledInput type="password"
                       id="matchPassword"
                       onChange={(e) => setMatchPassword(e.target.value)}
                       value={matchPassword}
                       disabled={!validUserPassword}
                       placeholder='Confirm Password' />
          <StyledLabel propsdata={true}>
            <StyledSpan
                className={
                  validMatchPassword && matchPassword ? "valid" : "hide"
                }
            >
                &#9745; 비밀번호 일치!
              </StyledSpan>
            <StyledSpan
                className={
                  validMatchPassword || !matchPassword ? "hide" : "invalid"
                }
            >
                &#9746; 비밀번호 불일치!
            </StyledSpan>
          </StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <StyledSubmit type="submit" value='회원가입' />
          <StyledButton onClick={ () => {navigate('/')}}>돌아가기</StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledSignup>
  );
}

export default Signup;