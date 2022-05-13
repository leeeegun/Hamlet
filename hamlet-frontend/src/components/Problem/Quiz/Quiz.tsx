import { question,hamlet2, Options } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { StyledDiv, StyleDiv2, StyledDiv3, AdminButton, StyledTimer, StyledScore, Styledtitle, Animate_progress, Progress_span, StyledOption  } from './styles';

type HamletProps = {
  quiz: hamlet2
}
// questionId, kinds, point, time, orders, multiple, contents, options
const Quiz = () => { // quiz : question
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);
  // var option, option2;

  // const dis = () => {
  //   for(let i = 0; i < options.length; i++){
  //     if (i === 0) {option = options[i]}
  //     else if (i === 1) { option2 = options[i]}
  //   }
  // }

  const renderTime = ({ remainingTime }:any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };
  

  return(
    <>
    {isResult ? 
    <StyledDiv>
    <StyleDiv2>
      <StyledScore>20</StyledScore>
      <Styledtitle>Quiz</Styledtitle>
      </StyleDiv2>
      <p>첫번째 문항 72%</p>
        <Animate_progress>
          <Progress_span data_progress={72} wcolor={"red"}>72%</Progress_span>
        </Animate_progress>
        <p>두번째 문항 28%</p>
        <Animate_progress>
          <Progress_span data_progress={28} wcolor={"blue"}>28%</Progress_span>
        </Animate_progress>
      </StyledDiv>
    :
    <>
    <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={ () => setResult(!isResult)}
      >{renderTime}</CountdownCircleTimer>
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>20</StyledScore>
        <Styledtitle>Quiz</Styledtitle>
      </StyleDiv2>
      <StyledOption selected={isSelected} onClick={(): void=> {if(!isSelected){setSelected(!isSelected); setSelected2(isSelected);}}}>첫번째 문항</StyledOption>
      <StyledOption selected={isSelected2} onClick={(): void=> {if(!isSelected2){setSelected(isSelected2); setSelected2(!isSelected2)}}}>두번째 문항</StyledOption>
    </StyledDiv>
    </>
    }
    </>
  );
}

export default Quiz;
