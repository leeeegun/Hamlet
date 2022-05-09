import React from 'react';
import { question } from '../../../types';
import styled from "styled-components";
import ReactWordcloud from 'react-wordcloud';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  background-color: #FFB762;
  width: 80%;
  min-height: 60vh;
  margin : 2em 0 2em 0;
  border-radius: 10px;
`;

const  Styledtitle = styled.label`
  margin : 2em 0 5em 0;
`;

const StyledOption = styled.label` 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: colors.bgDark;
    margin: 0 0 1em 0;
    width: 40%;
    height: 6vh;
    border-radius: 5px;
    font: 0.7em bold;
    color: black;
  `;

// <StyledInput value="input" />
function SubjectiveResult() { //  subjective : question
  // const { q, type, time, point} = subjective; // 주관식
  //https://eundol1113.tistory.com/314

  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <div>답출력</div>
    </StyledDiv>
  );
}

export default SubjectiveResult;
