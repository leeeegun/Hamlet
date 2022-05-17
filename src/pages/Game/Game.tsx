import React from 'react';
import logo from '../../images/logo.png';
import Timer from '../../components/Timer/Timer';
import { question } from '../../types';

import Quiz from '../../components/Problem/Quiz/Quiz';
import Problem from '../../components/Problem/Problem';
import Poll from '../../components/Problem/Poll/Poll';
import Survey from '../../components/Problem/Survey/Survey';
import Subjective from '../../components/Problem/Subjective/Subjective';
import ConrrectAnswer from '../../components/Problem/Result/CorrectAnswer';
import Result from '../../components/Problem/Result/Result';
import styled from 'styled-components';
import Participant from '../../components/Participant/Participant';
import ParticipantAdmin from '../../components/Participant/ParticipantAdmin';

const StyledLogo = styled.img`
  height: 12vmin;
  pointer-events: none;
`;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledRoom = styled.div`
  background-color: #FF961C;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const Game = ()  => { // myQs : question[]
  // const test  = () => {
  //   for (let qus of myQs){ // 햄릿 안에 질문 받아오기
  //     if (qus.type === 'quiz'){
  //       <Quiz {...qus}/>
  //     } else if (qus.type === 'poll'){
  //       <Poll {...qus}/>
  //     } else if (qus.type === 'survey'){
  //       <Survey {...qus}/>
  //     } else if (qus.type === 'subjective'){
  //       <Subjective {...qus}/>
  //     }
  //   }
  // }
  return (
    <StyledApp>
      <StyledRoom>
        <StyledLogo src={logo} alt="logo" />
        <Subjective />
      </StyledRoom>
    </StyledApp>
  );
}

export default Game;
