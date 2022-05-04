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
 
  & .Participant{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4F3F28;
    margin: 0 0 1em 0;
    width: 6em;
    height: 2em;
    border-radius: 5px;
    color: white;
  }
`;

const  Styledtitle = styled.label`
  margin : 0.5em 0 5em 0;
`;
export { StyledDiv, Styledtitle };