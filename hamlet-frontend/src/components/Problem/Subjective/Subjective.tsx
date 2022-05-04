import React from 'react';
import { StyledDiv } from './styles';
import { question } from '../../../types';

function Subjective( subjective : question) {
  const { q, type, time, point} = subjective; // 주관식
  return(
    <StyledDiv>
      <label>{q}</label>
      
    </StyledDiv>
  );
}

export default Subjective;
