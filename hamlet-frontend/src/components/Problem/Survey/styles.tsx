import styled from "styled-components";
import { colors } from "../../../styles/style";

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
    width: 40%;
    height: 2.5em;
    border-radius: 30px;
    font: 0.7em bold;
    color: black
  `;

  const StyledOption2 = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: colors.pointSub2;
  margin: 0 0 1em 0;
  width: 40%;
  height: 2.5em;
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
  width: 90%;
`;

const Styledp = styled.p`
  font-weight: bold;
`

const Animate_progress = styled.div`
  width: 50%;
  height: 4vh;
  margin: 20px 10px;
  border: 1px solid rgb(189, 113, 113);
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  margin : 0 0 0 0;
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

const StyledTimer = styled.div`
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
`

const AdminButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pointSub2};
  margin: 0 0 1em 0;
  width: 40%;
  height: 2.5em;
  border-radius: 10px;
  font: 0.7em bold;
  color: white;
  font-weight: bold;
`

const StyledDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
`;

export {StyleDiv2, StyledScore, StyledDiv3, AdminButton, StyledTimer, Styledtitle, StyledOption, StyledDiv, Styledp, Animate_progress, Progress_span, StyledOption2};