import React from 'react';
import logo from '../../images/logo.png';
import { StyledLogo, StyledApp, StyledRoom } from './styles';
import Quiz from '../../components/Problem/Quiz/Quiz';
import Timer from '../../components/Timer/Timer';

function Game() {
  
  return (
    <StyledApp>
      <StyledRoom>
        <StyledLogo src={logo} alt="logo" />
        <Timer mm="0" ss="30" />
        <Quiz title="1번문제" quest="남자 여자"></Quiz>
      </StyledRoom>
    </StyledApp>
  );
}

export default Game;