import React from 'react';
import { StyledDiv } from './styles';

type QuestionType = {
  type: string
  title: string
  quest: string
}

function Problem({ type, title, quest} : QuestionType) {
  return(
    <StyledDiv>
      
    </StyledDiv>
  );
}

export default Problem;