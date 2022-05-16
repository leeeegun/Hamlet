import { useState } from 'react'
import { question } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import Timer from '../../Timer/Timer';
import { StyledDiv, StyleDiv2, StyledDiv3, StyledTimer, StyledScore, Styledtitle, StyledInput, StyledResult, AdminButton } from './styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const Subjective = () => { // poll : question
  // const { q, type, time, choices} = poll;
  const [ isResult, setResult ] = useState<boolean>(false);

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
      <Styledtitle>주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식
      주관식주관식주관식주관식주관식
      </Styledtitle>
    </StyleDiv2>
    <StyledResult>답출력</StyledResult>
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
          <Styledtitle>주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식주관식
          주관식주관식주관식주관식주관식
          </Styledtitle>
        </StyleDiv2>
        <StyledInput placeholder='입력하세요'/>
      </StyledDiv>
    </>
    }
    </>
  );
}

export default Subjective;
