import React from 'react';
import { question } from '../../../types';
import styled from "styled-components";
import "./styles.css";

const colors = {
  green: "#32CD32",
  blue : "#1E90FF",
  purple : "#BF40BF",
  red : "#FF0000"
}

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

const Animate_progress = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  margin: 20px 10px;
  border: 1px solid rgb(189, 113, 113);
  overflow: hidden;
  position: relative;
`;

const Progress_span = styled.span<{ data_progress: number, wcolor: string}>`
  height: 100%;
  display: block;
  width: ${props => props.data_progress}%;
  color: rgb(255, 251, 251);
  background-color: ${props => props.wcolor === 'green' ? colors.green : props.wcolor === 'red' ? colors.red : props.wcolor === 'blue' ? colors.blue : colors.purple };
  line-height: 30px;
  position: absolute;
  text-align: end;
  padding-right: 5px;
`;



function SurveyResult() { // poll : question
  // const { q, type, time, choices} = poll;
  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <Animate_progress>
        <Progress_span data_progress={45} wcolor={"blue"}>45%</Progress_span>
      </Animate_progress>
      <Animate_progress>
        <Progress_span data_progress={60} wcolor={"red"}>60%</Progress_span>
      </Animate_progress>
      <Animate_progress>
        <Progress_span data_progress={70} wcolor={"purple"}>70%</Progress_span>
      </Animate_progress>
      <Animate_progress>
        <Progress_span data_progress={85} wcolor={"green"}>85%</Progress_span>
      </Animate_progress>
    </StyledDiv>
  );
}

export default SurveyResult;
