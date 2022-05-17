import styled from "styled-components";
import { colors } from "../../styles/style";

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

export { StyledDiv, StyledOption};