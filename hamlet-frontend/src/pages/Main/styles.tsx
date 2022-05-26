import styled from "styled-components";
import {Link} from 'react-router-dom';

const StyledInput = styled.input`
  width: 20rem;
  height: 2rem;
  background-color: #F2E9DF;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #FF961C;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledLogo = styled.img`
  height: 15vmin;
  pointer-events: none;
`

const StyledLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
`;



export {StyledInput, StyledHeader, StyledApp, StyledLogo, StyledLink};