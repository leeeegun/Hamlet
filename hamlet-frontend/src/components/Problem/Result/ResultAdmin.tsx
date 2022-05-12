import logo from '../../../images/logo.png';
import styled from 'styled-components';
import { colors } from '../../../styles/style';

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
  margin: 2em 0 1em 0;
  border-radius: 10px;
  padding: 1em 0 1em 0;
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
  margin: 1em 0 1em 0;
  width: 45%;
  height: 6vh;
  border-radius: 10px;
  font: 0.7em bold;
  color: white;
  font-weight: bold;
`

const ResultAdmin = () => {
  return(
    <>
    <StyledDiv>
      <StyledOption isTitle={true}>현재 문제</StyledOption>
      <StyledOption isTitle={false}><p>1위</p> <p>A206_윤혜구</p> <p>999점</p></StyledOption>
      <StyledOption isTitle={false}><p>2위</p> <p>A206_이규은</p> <p>994점</p></StyledOption>
      <StyledOption isTitle={false}><p>3위</p> <p>A206_이건</p> <p>880점</p></StyledOption>
    </StyledDiv>
    <StyledDiv3>
      <AdminButton>
        다음 문제 풀기
      </AdminButton>
    </StyledDiv3>
    </>
  );
}

export default ResultAdmin;