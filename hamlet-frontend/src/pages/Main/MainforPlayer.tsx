import logo from '../../images/logo.png';
import {useLocation} from 'react-router-dom';
import {StyledInput, StyledHeader, StyledApp, StyledLogo} from './styles';
import { useEffect } from 'react';

const MainforPlayer = () => {
  const location:any = useLocation();
  console.log(location.state.code); // 코드값
  return(
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <div>
          <StyledInput type="text" placeholder="닉네임 입력"/>
          <br/>
          <StyledInput type="submit" value="Submit" style={{ backgroundColor: '#3A342F', color:"#F2E9DF" }}/>
          <br/>
        </div>
        </StyledHeader>
    </StyledApp>
  );
}

export default MainforPlayer;