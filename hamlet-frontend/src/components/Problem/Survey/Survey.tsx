import React from 'react';
import { StyledDiv } from './styles';
import { question } from '../../../types';

function Survey( survey : question) {
  const { q, type, time} = survey; // 설문
  return(
    <StyledDiv>
      <label>{q}</label>
    </StyledDiv>
  );
}

export default Survey;
