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
  background-color: ${ colors.bgMain };
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
  margin : 0 0 0 5em;
`;

const Progress_span = styled.span<{ data_progress: number, wcolor: string}>`
  height: 100%;
  display: block;
  width: ${props => props.data_progress}%;
  color: rgb(255, 251, 251);
  background-color: ${props => props.wcolor === 'green' ? "green" : props.wcolor === 'red' ? "red" : props.wcolor === 'blue' ? "blue" : "purple" };
  line-height: 30px;
  position: absolute;
  text-align: start;
  padding-left: 5px;
`;

const StyleDiv2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 80%;
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

const Styledp = styled.p`
  font-weight: bold;
`

function SurveyResult() { // poll : question
  // const { q, type, time, choices} = poll;
  return(
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>-</StyledScore>
        <Styledtitle>현재 다니는 SSAFY캠퍼스는 어딘가요?</Styledtitle>
      </StyleDiv2>
      <Styledp>서울 캠퍼스 72%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={72} wcolor={"blue"}></Progress_span>
      </Animate_progress>
      <Styledp>대전 캠퍼스 13%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={13} wcolor={"red"}></Progress_span>
      </Animate_progress>
      <Styledp>부울경 캠퍼스 8%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={8} wcolor={"purple"}></Progress_span>
      </Animate_progress>
      <Styledp>구미 캠퍼스 7%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={7} wcolor={"green"}></Progress_span>
      </Animate_progress>
      <br/>
    </StyledDiv>
  );
}

export default SurveyResult;
