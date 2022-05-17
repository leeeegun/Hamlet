import { useState } from 'react';
import { question, hamlet2 } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import ReactWordcloud from 'react-wordcloud';
import { StyledDiv, Styledtitle, StyleDiv2, StyledTimer, StyledScore,  Styledp, StyledOption, Animate_progress, Progress_span, StyledDiv3, AdminButton } from './styles';

type HamletProps = {
  poll: hamlet2,
  parentCallback: () => void;
}


const Poll = ({poll, parentCallback} : HamletProps) => { 
  const { questionId, kinds, time, orders, multiple, contents, options} = poll;
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(true);
  //background-color: ${props => props.selected? colors.pointSub2 : colors.bgDark};
  // color: ${props => props.selected? "white" : "black" };

  const renderTime = ({ remainingTime }: any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };
  
  const selectAnswer = () => {
    setResult(true);
  }

  // useEffect(() => {
  //   parentCallback();
  // },[isSelected])
  
  return(
    <>
    {isResult ? 
      isAdmin ?
        <>
          <StyledDiv>
            <StyleDiv2>
              <StyledScore>-</StyledScore>
              <Styledtitle>{contents}</Styledtitle>
            </StyleDiv2>
            <Styledp>{options[0].contents}</Styledp>
            <Animate_progress>
              <Progress_span data_progress={72} wcolor={"blue"}></Progress_span>
            </Animate_progress>
            <Styledp>{options[1].contents}</Styledp>
            <Animate_progress>
              <Progress_span data_progress={13} wcolor={"red"}></Progress_span>
            </Animate_progress>
            <Styledp>{options[2].contents}</Styledp>
            <Animate_progress>
              <Progress_span data_progress={8} wcolor={"purple"}></Progress_span>
            </Animate_progress>
            <Styledp>{options[3].contents}</Styledp>
            <Animate_progress>
              <Progress_span data_progress={7} wcolor={"green"}></Progress_span>
            </Animate_progress>
            <br/>
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
            <StyledScore>-</StyledScore>
            <Styledtitle>{contents}</Styledtitle>
          </StyleDiv2>
          <Styledp>{options[0].contents}</Styledp>
          <Animate_progress>
            <Progress_span data_progress={72} wcolor={"blue"}></Progress_span>
          </Animate_progress>
          <Styledp>{options[1].contents}</Styledp>
          <Animate_progress>
            <Progress_span data_progress={13} wcolor={"red"}></Progress_span>
          </Animate_progress>
          <Styledp>{options[2].contents}</Styledp>
          <Animate_progress>
            <Progress_span data_progress={8} wcolor={"purple"}></Progress_span>
          </Animate_progress>
          <Styledp>{options[3].contents}</Styledp>
          <Animate_progress>
            <Progress_span data_progress={7} wcolor={"green"}></Progress_span>
          </Animate_progress>
          <br/>
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
            <StyledScore>-</StyledScore>
            <Styledtitle>{contents}</Styledtitle>
          </StyleDiv2>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[0].contents}</StyledOption>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[1].contents}</StyledOption>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[2].contents}</StyledOption>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[3].contents}</StyledOption>
        </StyledDiv>
        <StyledDiv3>
          <AdminButton onClick={(): void=>{selectAnswer()}}>
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
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[0].contents}</StyledOption>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[1].contents}</StyledOption>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[2].contents}</StyledOption>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[3].contents}</StyledOption>
        </StyledDiv>
      </>
    }
    </>
  );
}

export default Poll;