import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #FFB762;
  width: 80%;
  min-height: 80vh;
  border-radius: 10px;

  & .Participant{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4F3F28;
    margin: 1em 0.4em 0 0.4em;
    width: 6em;
    height: 2em;
    text-align: center;
    border-radius: 5px;
    color: white;
  }
`;

export { StyledDiv };