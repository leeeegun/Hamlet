import {useEffect, useState} from 'react';
import logo from '../../images/logo.png';
import {useNavigate} from 'react-router-dom';
import { StyledApp, StyledHeader, StyledLogo, StyledInput, StyledLink } from './styles';

const Main = () => {
  const [ InputValue, setInputValue ] = useState<Object>('');
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, []);

  const toforPlayer = () =>{
    navigate("/Mainforplayer", {state:{code:InputValue}});
  }

  return(
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
          <div>
            <StyledInput type="text" placeholder="코드입력" onChange={(event) => setInputValue(event.target.value)}/>
            <br/>
            <StyledInput type="submit" value="Submit" style={{ backgroundColor: '#3A342F', color:"#F2E9DF" }} onClick={():void=>{toforPlayer()}}/>
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