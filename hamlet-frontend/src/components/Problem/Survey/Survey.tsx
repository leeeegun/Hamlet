import { useState, useEffect } from 'react';
import { question, hamlet2 } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import ReactWordcloud from 'react-wordcloud';
import { StyledDiv, Styledtitle, StyleDiv2, StyledTimer, StyledScore, StyledInput, StyledDiv3, AdminButton } from './styles';
import Spinner from '../../../images/Spinner.gif';

type HamletProps = {
  survey: hamlet2,
  parentCallback: () => void;
}



const Survey = ({survey, parentCallback} : HamletProps) => { 
  const { questionId, kinds, time, orders, multiple, contents} = survey;
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(false);
  const [ isselcted, setSelcted ] = useState<boolean>(false);
  const [isloading, setLoading] = useState<boolean>(true);

  var time1 = (time*2)/3;
  var time2 = time/3;
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

  useEffect(() => {
    if (localStorage.getItem("token")){
      setAdmin(true);
    }
  }, [])

  const renderTime = ({ remainingTime }:any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };


  return(
    <>
      {
        isloading ?
        <CountdownCircleTimer
          isPlaying
          duration={3}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[3,2,1, 0]}
          onComplete={ () => setLoading(!isloading)}
          size={500}
        >{renderTime}</CountdownCircleTimer>
        :
        isResult ? 
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
              colorsTime={[time, time1, time2, 0]}
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
                colorsTime={[time, time1, time2, 0]}
                onComplete={ () => setResult(!isResult)}
              >{renderTime}</CountdownCircleTimer>
              {isselcted ?
                <StyledDiv>
                  <img src={Spinner} alt="로딩중" />
                  <div>다른 교육생들을 기다리고 있어요</div>
                </StyledDiv>
                :
                <StyledDiv>
                  <StyleDiv2>
                    <StyledScore>-</StyledScore>
                    <Styledtitle>{contents}</Styledtitle>
                  </StyleDiv2>
                  <StyledInput placeholder='입력하세요'/>
                </StyledDiv>
              }
            </>
      }
    </>
  );
}

export default Survey;
