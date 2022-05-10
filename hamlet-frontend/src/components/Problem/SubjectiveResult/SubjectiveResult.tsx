import React from 'react';
import { question } from '../../../types';
import styled from "styled-components";
import ReactWordcloud from 'react-wordcloud';
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
  margin : 2em 0 0 0;
  border-radius: 10px;
`;

const  Styledtitle = styled.label`
  margin : 2.5em 0 5em 3em;
  font-weight: bold;
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

const StyledResult = styled.span`
  color: green;
  font-weight: bold;
  font-size: 4em;
  margin: 0 0 1em 0;
`

// <StyledInput value="input" />
const SubjectiveResult = () => { //  subjective : question
  // const { q, type, time, point} = subjective; // 주관식
  //https://eundol1113.tistory.com/314

  return(
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>20</StyledScore>
        <Styledtitle>주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식
        주관식주관식주관식주관식주관식
        </Styledtitle>
      </StyleDiv2>
      <StyledResult>답출력</StyledResult>
    </StyledDiv>
  );
}

export default SubjectiveResult;
