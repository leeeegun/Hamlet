import { useState, useEffect } from 'react';
import { question, hamlet2 } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import ReactWordcloud from 'react-wordcloud';
import { StyledDiv, Styledtitle, StyleDiv2, StyledTimer, StyledScore, StyledInput, StyledDiv3, AdminButton } from './styles';


type HamletProps = {
  survey: hamlet2,
  parentCallback: () => void;
}



const Survey = ({survey, parentCallback} : HamletProps) => { 
  const { questionId, kinds, time, orders, multiple, contents} = survey;
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(true);
  const [ isSelected, setSelected ] = useState<boolean>(false);
  

  const words = [
    {
      text: '정답123',
      value: 16,
    },
    {
      text: '정답1234',
      value: 17,
    },
    {
      text: '정답1',
      value: 64,
    },
    {
      text: '정답12',
      value: 11,
    },
    {
      text: '정답123',
      value: 16,
    },
    {
      text: '정답1234',
      value: 17,
    },
    {
      text: '정답1',
      value: 64,
    },
    {
      text: '정답12',
      value: 11,
    },
    {
      text: '정답123',
      value: 16,
    },
    {
      text: '정답1234',
      value: 17,
    },
  ]

  const options: any = {
    fontSizes : [30,60],
  }

  const selectAnswer = () => {
    setResult(true);
  }

  // useEffect(() => {
  //   parentCallback();
  // },[isSelected])

  const renderTime = ({ remainingTime }:any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };


  return(
    <>
      {isResult ? 
          isAdmin ?
          <>
            <StyledDiv>
              <Styledtitle>contents</Styledtitle>
              <ReactWordcloud words={words} options={options} /> 
            </StyledDiv>
            <StyledDiv3>
              <AdminButton onClick={(): void=> parentCallback()}>
                다음 문제 풀기
              </AdminButton>
            </StyledDiv3>
          </>
          :
          <StyledDiv>
            <Styledtitle>contents</Styledtitle>
            <ReactWordcloud words={words} options={options} /> 
          </StyledDiv>
        :
          isAdmin ? 
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
                <StyledScore>-</StyledScore>
                <Styledtitle>{contents}</Styledtitle>
              </StyleDiv2>
              <StyledInput placeholder='입력하세요'/>
            </StyledDiv>
            <StyledDiv3>
              <AdminButton onClick={(): void => selectAnswer()}>
                Skip
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
                  <StyledScore>-</StyledScore>
                  <Styledtitle>{contents}</Styledtitle>
                </StyleDiv2>
                <StyledInput placeholder='입력하세요'/>
              </StyledDiv>
            </>
      }
    </>
  );
}

export default Survey;
