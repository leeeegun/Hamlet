<<<<<<< HEAD
import React from 'react';
import { StyledDiv } from './styles';


type QuestionProps = {
  title : string
  quest : string
}

function Quiz({ title, quest } : QuestionProps) {
  return(
    <StyledDiv>
      <label>{title}</label>
      <div>{quest}</div>
    </StyledDiv>
  );
}

export default Quiz;
=======
export {}
>>>>>>> 05c0232451d7cab136ca4ffbb73b49a03cffff15
