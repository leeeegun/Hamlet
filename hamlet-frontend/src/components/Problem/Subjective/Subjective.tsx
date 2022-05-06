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


function Subjective() { //  subjective : question
  // const { q, type, time, point} = subjective; // 주관식
  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <input value="input" />
    </StyledDiv>
  );
}

export default Subjective;
