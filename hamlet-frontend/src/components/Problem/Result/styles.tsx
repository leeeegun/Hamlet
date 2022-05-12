import styled from "styled-components";
import { colors } from "../../../styles/style";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: #FFB762;
  width: 80%;
  min-height: 60vh;
  margin : 2em 0 1em 0;
  border-radius: 10px;
  padding: 1em 0 1em 0;
`;

const StyledDiv2 = styled.div<{isCorrect : boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  margin: 1em 0 1em 0;
  width: 50vh;
  height: 50vh;

  & p{
      font-weight: bold;
      color: ${props=>props.isCorrect ? "green" : "red"};
      font-size: 4em;
  }

  & p.title{
      font-weight: bold;
      color: black;
      font-size: 1em;
  }
`;

const StyledDiv3 = styled.div`
  display: inline;
  margin : 2em 0 2em 0;

  & p{
    color: white;
    font-weight: bold;
  }
`;

const StyledOption = styled.div<{isTitle: boolean}>` 
    display: flex;
    justify-content: ${props => props.isTitle ? "center" : "space-between"};
    align-items: center;
    background-color: ${props => props.isTitle ? "#FFFFFF" : colors.pointSub2};
    width: ${props => props.isTitle ? 35 : 65}%;
    height: 6vh;
    border-radius: 20px;
    font-size: 0.7em;
    font-weight: bold;
    color:  ${props => props.isTitle ? "#FF961C" : "white"};
    padding: 0 2em 0 2em;
    margin: 0 0 2em 0;
  `;

const AdminButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pointSub2};
  margin: 1em 0 1em 0;
  width: 40%;
  height: 2.5em;
  border-radius: 10px;
  font: 0.7em bold;
  color: white;
  font-weight: bold;
`

const StyledDivCorrectAnswer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: columns;
  justify-content: space-around;
  background-color: #FFB762;
  width: 80%;
  min-height: 40vh;
  margin : 2em 0 1em 0;
  border-radius: 10px;
`;

export { StyledDiv, StyledDiv2, StyledDiv3, StyledOption, AdminButton, StyledDivCorrectAnswer};