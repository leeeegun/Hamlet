import { useState } from 'react';
import { question, hamlet2 } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import ReactWordcloud from 'react-wordcloud';
import { StyledDiv, Styledtitle, StyleDiv2, StyledTimer, StyledScore, StyledInput, StyledDiv3, AdminButton } from './styles';


type HamletProps = {
  poll: hamlet2
}

// 관리자 문제화면
{/* <StyledDiv3>
        <AdminButton>
          Skip
        </AdminButton>
        <AdminButton>
          정답공개
        </AdminButton>
      </StyledDiv3> */}

// 관리자 결과화면
{/* <StyledDiv3>
      <AdminButton>
        다음 문제 풀기
      </AdminButton>
    </StyledDiv3> */}

const Poll = () => { 
  const [ isResult, setResult ] = useState<boolean>(false);

  const words = [
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

  const renderTime = ({ remainingTime }:any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };
  return(
    <>
      {isResult ? 
      <StyledDiv>
        <Styledtitle>contents</Styledtitle>
        <ReactWordcloud words={words} options={options} /> 
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
          <StyledScore>-</StyledScore>
          <Styledtitle>Poll</Styledtitle>
        </StyleDiv2>
        <StyledInput placeholder='입력하세요'/>
      </StyledDiv>
      </>
    }
    </>
  );
}

export default Poll;
