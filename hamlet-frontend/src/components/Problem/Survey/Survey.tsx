import { question } from '../../../types';
import styled from "styled-components";
import { useState } from 'react'
import { colors } from '../../../styles/style';

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
    color: black
  `;

const  Styledtitle = styled.label`
  margin : 2em 0 3em 0;
`;

function Survey() { // survey : question
  // const { q, type, time} = survey; // 설문
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isSelected3, setSelected3] = useState<boolean>(false);
  const [ isSelected4, setSelected4] = useState<boolean>(false);

  //background-color: ${props => props.selected? colors.pointSub2 : colors.bgDark};
  // color: ${props => props.selected? "white" : "black" };

  return(
    <StyledDiv>
      <Styledtitle>hi</Styledtitle>
      <StyledOption selected={isSelected} onClick={(): void=> {if(!isSelected){setSelected(!isSelected); setSelected2(isSelected); setSelected3(isSelected); setSelected4(isSelected)}}}>여기</StyledOption>
      <StyledOption selected={isSelected2} onClick={(): void=> {if(!isSelected2){setSelected(isSelected2); setSelected2(!isSelected2); setSelected3(isSelected2); setSelected4(isSelected2)}}}>여기2</StyledOption>
      <StyledOption selected={isSelected3} onClick={(): void=> {if(!isSelected3){setSelected(isSelected3); setSelected2(isSelected3); setSelected3(!isSelected3); setSelected4(isSelected3)}}}>여기3</StyledOption>
      <StyledOption selected={isSelected4} onClick={(): void=> {if(!isSelected4){setSelected(isSelected4); setSelected2(isSelected4); setSelected3(isSelected4); setSelected4(!isSelected4)}}}>여기4</StyledOption>
    </StyledDiv>
  );
}

export default Survey;
