import { useState, useEffect } from 'react'
import { question, hamlet2 } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { StyledDiv, StyleDiv2, StyledDiv3, StyledTimer, StyledScore, Styledtitle, StyledInput, StyledResult, AdminButton } from './styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type HamletProps = {
  subjective: hamlet2,
  parentCallback: () => void,
}

const Subjective = ({ subjective, parentCallback} : HamletProps) => { // poll : question
  const { questionId, kinds,  time, orders, multiple, contents, point} = subjective;
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(true);

  const renderTime = ({ remainingTime }:any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };

  // useEffect(() => {
  //   parentCallback();
  // },[isSelected])

  const selectAnswer = () => {
    setResult(true);
  }

  return(
    <>
    {isResult ? 
        isAdmin ? 
          <>
            <StyledDiv>
              <StyleDiv2>
                <StyledScore>{point}</StyledScore>
                <Styledtitle>{contents}</Styledtitle>
              </StyleDiv2>
              <StyledResult>답출력</StyledResult>
            </StyledDiv>
            <StyledDiv3>
                <AdminButton onClick={(): void=> parentCallback()}>
                  다음 문제 풀기
                </AdminButton>
              </StyledDiv3>
          </>
        :
          <StyledDiv>
            <StyleDiv2>
              <StyledScore>{point}</StyledScore>
              <Styledtitle>{contents}</Styledtitle>
            </StyleDiv2>
            <StyledResult>답출력</StyledResult>
          </StyledDiv>
    : isAdmin ?
      <>
        <CountdownCircleTimer
          isPlaying
          duration={time}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={ () => setResult(!isResult)}
        >{renderTime}</CountdownCircleTimer>
        <StyledDiv>
          <StyleDiv2>
            <StyledScore>{point}</StyledScore>
            <Styledtitle>{contents}</Styledtitle>
          </StyleDiv2>
          <StyledInput placeholder='입력하세요'/>
        </StyledDiv>
        <StyledDiv3>
          <AdminButton onClick={():void=>selectAnswer()}>
            Skip
          </AdminButton>
          <AdminButton>
            정답공개
          </AdminButton>
        </StyledDiv3>
      </>
    :
      <>
      <CountdownCircleTimer
          isPlaying
          duration={time}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={ () => setResult(!isResult)}
        >{renderTime}</CountdownCircleTimer>
        <StyledDiv>
          <StyleDiv2>
            <StyledScore>{point}</StyledScore>
            <Styledtitle>{contents}</Styledtitle>
          </StyleDiv2>
          <StyledInput placeholder='입력하세요'/>
        </StyledDiv>
      </>
    }
    </>
  );
}

export default Subjective;
