import {StyledDivCorrectAnswer, StyledDiv2, StyledDiv3,NextButton} from './styles';


type CorrectProps = {
  point: number,
  isCorrect:boolean
}
const ConrrectAnswer = ({ point, isCorrect }:CorrectProps) => {
  return(
    <StyledDivCorrectAnswer>
      <StyledDiv2 isCorrect={isCorrect}>
        <p className="title">누적점수넣는곳</p>
        { 
          isCorrect ?
            <p>+{point}</p>
          :
            <p>+0</p>
        }
        
      </StyledDiv2>
      <StyledDiv3>
        <p>1. 이름 해당문제점수1등 </p>
        <p>2. 이름 해당문제점수2등 </p>
        <p>3. 이름 해당문제점수3등 </p>
      </StyledDiv3>
    </StyledDivCorrectAnswer>
  )
}

export default ConrrectAnswer;