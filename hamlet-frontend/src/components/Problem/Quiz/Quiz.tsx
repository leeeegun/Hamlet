import { question } from '../../../types';
import Timer from '../../Timer/Timer';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { useState } from 'react'

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


const Quiz = () => { // quiz : question
  //const { q, type, time, point, choices} = quiz;
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);

  const StyledOption = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.selected? colors.pointSub2 : colors.bgDark};
  margin: 0 0 1em 0;
  width: 40%;
  height: 6vh;
  border-radius: 5px;
  font: 0.7em bold;
  color: ${props => props.selected? "white" : "black" };
`;

  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <StyledOption selected={isSelected} onClick={(): void=> {if(!isSelected){setSelected(!isSelected); setSelected2(isSelected);}}}>여기</StyledOption>
      <StyledOption selected={isSelected2} onClick={(): void=> {if(!isSelected2){setSelected(isSelected2); setSelected2(!isSelected2)}}}>여기2</StyledOption>
    </StyledDiv>
  );
}

export default Quiz;
