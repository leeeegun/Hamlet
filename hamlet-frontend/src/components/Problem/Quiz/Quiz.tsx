import { question } from '../../../types';
import Timer from '../../Timer/Timer';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { useState } from 'react'

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.bgMain};
  width: 80%;
  min-height: 60vh;
  margin : 2em 0 1em 0;
  border-radius: 10px;
`;

const StyledOption = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.selected? colors.pointSub2 : colors.bgDark};
  margin: 0 0 1em 0;
  width: 40%;
  height: 2.5em;
  border-radius: 50px;
  font: 0.7em bold;
  color: ${props => props.selected? "white" : "black" };
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
  width: 90%;  
`;

const Quiz = () => { // quiz : question
  //const { q, type, time, point, choices} = quiz;
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);

  return(
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>20</StyledScore>
        <Styledtitle>퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈</Styledtitle>
      </StyleDiv2>
      <StyledOption selected={isSelected} onClick={(): void=> {if(!isSelected){setSelected(!isSelected); setSelected2(isSelected);}}}>여기</StyledOption>
      <StyledOption selected={isSelected2} onClick={(): void=> {if(!isSelected2){setSelected(isSelected2); setSelected2(!isSelected2)}}}>여기2</StyledOption>
    </StyledDiv>
  );
}

export default Quiz;
