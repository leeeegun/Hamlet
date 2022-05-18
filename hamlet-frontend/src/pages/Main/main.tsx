import {useEffect, useState} from 'react';
import logo from '../../images/logo.png';
import {useNavigate} from 'react-router-dom';
import { StyledApp, StyledHeader, StyledLogo, StyledInput, StyledLink } from './styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const Main = () => {
  const [ InputValue, setInputValue ] = useState<string>('');
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
            <StyledInput type="text" placeholder="코드입력" onChange={(event) => setInputValue(event.target.value)}/>
            <br/>
            <StyledInput type="submit" value="Submit" style={{ backgroundColor: '#3A342F', color:"#F2E9DF" }} onClick={():void=>{navigate("/Mainforplayer", {state:{code:InputValue}})}}/>
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