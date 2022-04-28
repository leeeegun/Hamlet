import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background-color: #4F3F28;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  margin: 0.3em 0.5em 0 0.8em;
  width: 90%;
  height: 30px;
  background-color: #F2E9DF;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
`;

const StyledButton = styled.button`
  margin: 0.5em 0.7em 0.3em 0.7em;
  width: 95%;
  height: 2.5em;
  border-radius: 10px;
  color: white;
  background-color: #4F3F28;
`;

const StyledSubmit = styled.input`
  margin: 0.5em 0.7em 0.3em 0.7em;
  width: 95%;
  height: 2.5em;
  border-radius: 10px;
  color: white;
  background-color: #4F3F28;
`;

const StyledLogo = styled.img`
  height: 10vmin;
  pointer-events: none;
`;

const StyledLabel = styled.label`
  margin: 0 0.5em 0 0.8em;
  color: black;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
`;

export { StyledLogin, StyledForm, Styledfieldset, StyledInput, StyledSubmit, StyledLogo, StyledLabel, StyledLink, StyledButton };