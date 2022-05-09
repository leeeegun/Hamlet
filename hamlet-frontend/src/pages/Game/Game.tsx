import React from 'react';
import logo from '../../images/logo.png';
import { StyledLogo, StyledApp, StyledRoom } from './styles';
import Quiz from '../../components/Problem/Quiz/Quiz';
import Timer from '../../components/Timer/Timer';
import { question } from '../../types';
import Problem from '../../components/Problem/Problem';
import Poll from '../../components/Problem/Poll/Poll';
import Survey from '../../components/Problem/Survey/Survey';
import Subjective from '../../components/Problem/Subjective/Subjective';
import SubjectiveResult from '../../components/Problem/SubjectiveResult/SubjectiveResult';
import PollResult from '../../components/Problem/PollResult/PollResult';
import SurveyResult from '../../components/Problem/SurveyResult/SurveyResult';

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
        <Timer ss={'30'} />
        <SurveyResult />
      </StyledRoom>
    </StyledApp>
  );
}

export default Game;
