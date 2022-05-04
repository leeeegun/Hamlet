import React from 'react';
import { StyledDiv}  from './styles';
import { question } from '../../../types';

function Poll( poll : question) {
  const { q, type, time, choices} = poll;
  return(
    <StyledDiv>
      <label>{q}</label>
      {
        // choices.map((item, idx) => (
        //   <div>{item}</div>
        // ))
      }
      
    </StyledDiv>
  );
}

export default Poll;
