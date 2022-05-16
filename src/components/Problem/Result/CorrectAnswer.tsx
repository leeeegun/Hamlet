import styled from 'styled-components';
import {colors} from '../../../styles/style';
import {StyledDivCorrectAnswer, StyledDiv2, StyledDiv3} from './styles';


const ConrrectAnswer = () => {
  return(
    <StyledDivCorrectAnswer>
      <StyledDiv2 isCorrect={true}>
        <p className="title">1256</p>
        <p>+256</p>
      </StyledDiv2>
      <StyledDiv3>
        <p>1. 이름 +999 </p>
        <p>2. 이름 +777 </p>
        <p>3. 이름 +256 </p>
      </StyledDiv3>
    </StyledDivCorrectAnswer>
  )
}

export default ConrrectAnswer;