import { question } from '../../../types';
import styled from "styled-components";
import { useState } from 'react'
import { colors } from '../../../styles/style';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${ colors.bgMain };
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
    width: 50%;
    height: 6vh;
    border-radius: 30px;
    font: 0.7em bold;
    color: black
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

const StyledDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;

const AdminButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pointSub2};
  margin: 0 0 1em 0;
  width: 45%;
  height: 6vh;
  border-radius: 10px;
  font: 0.7em bold;
  color: white;
  font-weight: bold;
`

const SurveyAdmin = () => { // survey : question
  // const { q, type, time} = survey; // 설문
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isSelected3, setSelected3] = useState<boolean>(false);
  const [ isSelected4, setSelected4] = useState<boolean>(false);

  //background-color: ${props => props.selected? colors.pointSub2 : colors.bgDark};
  // color: ${props => props.selected? "white" : "black" };

  return(
    <>
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>-</StyledScore>
        <Styledtitle>현재 다니는 SSAFY캠퍼스는 어딘가요?</Styledtitle>
      </StyleDiv2>
      <StyledOption selected={isSelected} onClick={(): void=> {if(!isSelected){setSelected(!isSelected); setSelected2(isSelected); setSelected3(isSelected); setSelected4(isSelected)}}}>여기</StyledOption>
      <StyledOption selected={isSelected2} onClick={(): void=> {if(!isSelected2){setSelected(isSelected2); setSelected2(!isSelected2); setSelected3(isSelected2); setSelected4(isSelected2)}}}>여기2</StyledOption>
      <StyledOption selected={isSelected3} onClick={(): void=> {if(!isSelected3){setSelected(isSelected3); setSelected2(isSelected3); setSelected3(!isSelected3); setSelected4(isSelected3)}}}>여기3</StyledOption>
      <StyledOption selected={isSelected4} onClick={(): void=> {if(!isSelected4){setSelected(isSelected4); setSelected2(isSelected4); setSelected3(isSelected4); setSelected4(!isSelected4)}}}>여기4</StyledOption>
    </StyledDiv>
    <StyledDiv3>
      <AdminButton>
        Skip
      </AdminButton>
      <AdminButton>
        정답공개
      </AdminButton>
    </StyledDiv3>
    </>
  );
}

export default SurveyAdmin;
