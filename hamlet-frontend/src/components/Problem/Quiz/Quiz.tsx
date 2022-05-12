import { question } from '../../../types';
import Timer from '../../Timer/Timer';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { StyledDiv, StyleDiv2, StyledDiv3, AdminButton, StyledScore, Styledtitle, Animate_progress, Progress_span, StyledOption  } from './styles';

const Quiz = () => { // quiz : question
  //const { q, type, time, point, choices} = quiz;
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);

  return(
    <>
    {isResult ? 
    <StyledDiv>
    <StyleDiv2>
      <StyledScore>20</StyledScore>
      <Styledtitle>결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과결과
          결과결과결과결과결과결과결과결과결과</Styledtitle>
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
      ></CountdownCircleTimer>
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>20</StyledScore>
        <Styledtitle>퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈퀴즈</Styledtitle>
      </StyleDiv2>
      <StyledOption selected={isSelected} onClick={(): void=> {if(!isSelected){setSelected(!isSelected); setSelected2(isSelected);}}}>여기</StyledOption>
      <StyledOption selected={isSelected2} onClick={(): void=> {if(!isSelected2){setSelected(isSelected2); setSelected2(!isSelected2)}}}>여기2</StyledOption>
    </StyledDiv>
    </>
    }
    </>
  );
}

export default Quiz;
