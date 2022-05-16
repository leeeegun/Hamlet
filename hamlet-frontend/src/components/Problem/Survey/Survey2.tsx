import { question,hamlet2 } from '../../../types';
import { useState } from 'react'
import { StyledDiv, StyledScore, Styledtitle, StyledTimer, StyleDiv2, StyledOption, Styledp, Progress_span, Animate_progress, StyledOption2 } from './styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Waiting from '../Waiting/Waiting';

type HamletProps = {
  survey: hamlet2
}


const Survey2 = () => { // survey : question
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isSelected3, setSelected3] = useState<boolean>(false);
  const [ isSelected4, setSelected4] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);
  //background-color: ${props => props.selected? colors.pointSub2 : colors.bgDark};
  // color: ${props => props.selected? "white" : "black" };

  const renderTime = ({ remainingTime }: any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };

  const waiting = ({ remainingTime }: any) => {
    return (
      <Waiting></Waiting>
    );
  }
  
  return(
    <>
    {isResult ? 
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>-</StyledScore>
        <Styledtitle>테스트</Styledtitle>
      </StyleDiv2>
      <Styledp>선택지1</Styledp>
      <Animate_progress>
        <Progress_span data_progress={72} wcolor={"blue"}></Progress_span>
      </Animate_progress>
      <Styledp>선택지2</Styledp>
      <Animate_progress>
        <Progress_span data_progress={13} wcolor={"red"}></Progress_span>
      </Animate_progress>
      <Styledp>선택지3</Styledp>
      <Animate_progress>
        <Progress_span data_progress={8} wcolor={"purple"}></Progress_span>
      </Animate_progress>
      <Styledp>선택지4</Styledp>
      <Animate_progress>
        <Progress_span data_progress={7} wcolor={"green"}></Progress_span>
      </Animate_progress>
      <br/>
    </StyledDiv>
    :
    isSelected 
    ? 
    <StyledDiv><StyleDiv2><Styledtitle>대기중입니다.</Styledtitle></StyleDiv2></StyledDiv> :
    <>
    <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={ () => setResult(!isResult)}
      >{renderTime}</CountdownCircleTimer>
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>-</StyledScore>
        <Styledtitle>테스트</Styledtitle>
      </StyleDiv2>
      <StyledOption2 onClick={(): void=> setSelected(!isSelected)}>선택지1</StyledOption2>
      <StyledOption2 onClick={(): void=> setSelected(!isSelected)}>선택지2</StyledOption2>
      <StyledOption2 onClick={(): void=> setSelected(!isSelected)}>선택지3</StyledOption2>
      <StyledOption2 onClick={(): void=> setSelected(!isSelected)}>선택지4</StyledOption2>
    </StyledDiv>
    </>
    }
    </>
  );
}

export default Survey2;
