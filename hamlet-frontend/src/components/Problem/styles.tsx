import styled from "styled-components";


const StyledLogo = styled.img`
height: 12vmin;
pointer-events: none;
`;

const StyledApp = styled.div`
text-align: center;
`;

const StyledRoom = styled.div`
background-color: #FF961C;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
font-size: calc(10px + 2vmin);
color: black;
`;

export { StyledLogo, StyledApp, StyledRoom};