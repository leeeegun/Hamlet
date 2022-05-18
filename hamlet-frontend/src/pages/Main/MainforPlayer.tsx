import logo from '../../images/logo.png';
import {useLocation} from 'react-router-dom';
import {StyledInput, StyledHeader, StyledApp, StyledLogo} from './styles';



const MainforPlayer = () => {
  let location = useLocation();
  // {location.state.code} 이게 코드명
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