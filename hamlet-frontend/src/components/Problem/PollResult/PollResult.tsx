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
  width: 60%;
  min-height: 40vh;
  margin : 2em 0 2em 0;
  padding : 2em 2em 2em 2em;
  border-radius: 10px;
`;

const  Styledtitle = styled.label`
  margin : 2em 0 5em 0;
`;

// <StyledInput value="input" />
function PollResult() { //  subjective : question
  // const { q, type, time, point} = subjective; // 주관식
  //https://eundol1113.tistory.com/314
  const words = [
    {
      text: '정답1',
      value: 64,
    },
    {
      text: '정답12',
      value: 11,
    },
    {
      text: '정답123',
      value: 16,
    },
    {
      text: '정답1234',
      value: 17,
    },
  ]

  const options: any = {
    fontSizes : [5,60],
  }
//<div style={{height:400, width:600, bottom:"3em"}} ></div>
  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <ReactWordcloud words={words} options={options} />
      
    </StyledDiv>
  );
}

export default PollResult;
