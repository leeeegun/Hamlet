import React from 'react';
import { question } from '../../../types';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  background-color: #FFB762;
  width: 80%;
  min-height: 60vh;
  margin-top : 2em;
  border-radius: 10px;
`;

const  Styledtitle = styled.label`
  margin : 2em 0 3em 0;
`;

const StyledOption = styled.progress` 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: colors.bgDark;
    margin: 0 0 1em 0;
    width: 40%;
    height: 6vh;
    border-radius: 5px;
    font: 0.7em bold;
    color: black
  `;

function QuizResult( ) { // poll : question
  // const { q, type, time, choices} = poll;
  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <p>첫번째 문항 72%</p>
      <StyledOption max="100" value={"72"}/>
      <p>두번째 문항 28%</p>
      <StyledOption max="100" value={"28"}/>
    </StyledDiv>
  );
}

export default QuizResult;
