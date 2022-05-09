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
  margin : 2em 0 5em 0;
`;

const StyledInput = styled.input`
  background-color: colors.pointSub2;
  margin: 0 0 1em 0;
  width: 40%;
  height: 5vh;
  border-radius: 5px;
  font: 0.9em bold;
  color: black
`;

function Poll( ) { // poll : question
  // const { q, type, time, choices} = poll;
  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <StyledInput />
    </StyledDiv>
  );
}

export default Poll;
