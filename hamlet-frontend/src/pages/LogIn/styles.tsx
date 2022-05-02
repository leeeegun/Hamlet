import styled from 'styled-components';

const StyledLogin = styled.div`
  background-color: #FF961C;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledForm = styled.form`
  min-height: 30vh;
  background-color: #F2E9DF;
  font-size: calc(10px + 2vmin);
  border-radius: 10px;
  color: white;
`;

const Styledfieldset = styled.fieldset`
  height: 4vmin;
  display: flex;
  flex-direction: column;
  background-color: #4F3F28;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  margin: 0.3em 0.5em 0.5em 1em;
  width: 90%;
  height: 30px;
  background-color: #F2E9DF;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
`;

const StyledSubmit = styled.input`
  margin: 0.5em 0.7em 0 0.9em;
  width: 50%;
  height: 2.5em;
  border-radius: 10px;
  color: white;
  background-color: #4F3F28;
`;

const StyledButton = styled.button`
  margin: 0.3em 0.7em 0 0.9em;
  width: 50%;
  height: 2.5em;
  border-radius: 10px;
  color: white;
  background-color: #4F3F28;
`;

const StyledLogo = styled.img`
  height: 5vmin;
  pointer-events: none;
`;

const StyledLabel = styled.label`
  margin: 0 0.5em 0 1em;
  color: black;
  font-size: 20px;
`;


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { StyledLogin, StyledForm, Styledfieldset, StyledInput, StyledSubmit, StyledLogo, StyledLabel, StyledButton, StyledDiv };