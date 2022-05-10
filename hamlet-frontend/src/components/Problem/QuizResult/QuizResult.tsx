import React from 'react';
import { question } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';


const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  background-color: ${colors.bgMain};
  width: 80%;
  min-height: 60vh;
  margin : 2em 0 2em 0;
  border-radius: 10px;
`;

const  Styledtitle = styled.label`
  margin : 2.5em 0 5em 3em;
  font-weight: bold;
`;

const Animate_progress = styled.div`
  width: 50%;
  height: 4vh;
  margin: 20px 10px;
  border: 1px solid rgb(189, 113, 113);
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  margin : 0 0 2em 5em;
`;

const Progress_span = styled.span<{ data_progress: number, wcolor: string}>`
  height: 100%;
  display: block;
  width: ${props => props.data_progress}%;
  color: rgb(255, 251, 251);
  background-color: ${props => props.wcolor === 'green' ? "green" : props.wcolor === 'red' ? "red" : props.wcolor === 'blue' ? "blue" : "purple" };
  line-height: 30px;
  position: absolute;
  text-align: end;
  padding-right: 5px;
`;

const StyledScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-content:center;
  background-color: ${ colors.pointSub1 };
  min-width: 9vh;
  max-width: 9vh;
  min-height: 9vh;
  max-height: 9vh;
  border-radius: 100%;
  margin : 2em 0 5em 0;
  color: white;
  font-weight: bold;
`;

const StyleDiv2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 80%;
`;

function QuizResult( ) { // poll : question
  // const { q, type, time, choices} = poll;
  return(
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>20</StyledScore>
        <Styledtitle>결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과
          결과결과결과결과결과결과결과결과결과</Styledtitle>
      </StyleDiv2>
      
      <p>첫번째 문항 72%</p>
      <Animate_progress>
        <Progress_span data_progress={72} wcolor={"red"}>72%</Progress_span>
      </Animate_progress>
      <p>두번째 문항 28%</p>
      <Animate_progress>
        <Progress_span data_progress={28} wcolor={"blue"}>28%</Progress_span>
      </Animate_progress>
    </StyledDiv>
  );
}

export default QuizResult;
