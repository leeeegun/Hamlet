import { question,hamlet2, Options } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';
import { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { StyledDiv, StyleDiv2, StyledDiv3, AdminButton, StyledTimer, StyledScore, Styledtitle, Animate_progress, Progress_span, StyledOption  } from './styles';

type HamletProps = {
  quiz: hamlet2,
  parentCallback: () => void;
}
// questionId, kinds, point, time, orders, multiple, contents, options
const Quiz = ({ quiz, parentCallback} : HamletProps) => { // quiz : question
  const { questionId, kinds,  time, orders, multiple, contents, options, point} = quiz;
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(true);

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

  const selectAnswer = () => {
    setResult(true);
  }

  // useEffect(() => {
  //   parentCallback();
  // },[])

  return(
    <>
    {isResult ? 
        isAdmin ? 
        <>
        <StyledDiv>
          <StyleDiv2>
            <StyledScore>20</StyledScore>
            <Styledtitle>{contents}</Styledtitle>
          </StyleDiv2>
          <p>{options[0].contents}</p>
          <Animate_progress>
            <Progress_span data_progress={72} wcolor={"red"}>72%</Progress_span>
          </Animate_progress>
          <p>{options[1].contents}</p>
          <Animate_progress>
            <Progress_span data_progress={28} wcolor={"blue"}>28%</Progress_span>
          </Animate_progress>
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
        <StyledScore>20</StyledScore>
        <Styledtitle>{contents}</Styledtitle>
      </StyleDiv2>
      <p>{options[0].contents}</p>
        <Animate_progress>
          <Progress_span data_progress={72} wcolor={"red"}>72%</Progress_span>
        </Animate_progress>
        <p>{options[1].contents}</p>
        <Animate_progress>
          <Progress_span data_progress={28} wcolor={"blue"}>28%</Progress_span>
        </Animate_progress>
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
              <StyledOption onClick={(): void=> {selectAnswer()}}>{options[0].contents}</StyledOption>
              <br/>
              <StyledOption onClick={(): void=> {selectAnswer()}}>{options[1].contents}</StyledOption>
            </StyledDiv>
            <StyledDiv3>
              <AdminButton onClick={(): void=>{selectAnswer()}}>
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
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[0].contents}</StyledOption>
          <br/>
          <StyledOption onClick={(): void=> {selectAnswer()}}>{options[1].contents}</StyledOption>
        </StyledDiv>
      </>
    }
    </>
  );
}

export default Quiz;
