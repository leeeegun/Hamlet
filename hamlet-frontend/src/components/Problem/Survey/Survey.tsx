import { question,hamlet2 } from '../../../types';
import { useState,useEffect } from 'react'
import { StyledDiv, StyledScore, StyledDiv3, AdminButton,Styledtitle, StyledTimer, StyleDiv2, StyledOption, Styledp, Progress_span, Animate_progress } from './styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Waiting from '../Waiting/Waiting';

type HamletProps = {
  survey: hamlet2,
  parentCallback: () => void;
}


const Survey = ({survey, parentCallback} : HamletProps) => { // survey : question
  const { questionId, kinds, time, orders, multiple, contents, options} = survey;
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isSelected3, setSelected3] = useState<boolean>(false);
  const [ isSelected4, setSelected4] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(false);
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
  
  const answer = () => {
    setSelected(true);
  }

  useEffect(() => {
    parentCallback();
  },[isSelected])
  
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
            <AdminButton>
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
          <StyledOption selected={isSelected} onClick={(): void=> {answer()}}>{options[0].contents}</StyledOption>
          <StyledOption selected={isSelected2} onClick={(): void=> {answer()}}>{options[1].contents}</StyledOption>
          <StyledOption selected={isSelected3} onClick={(): void=> {answer()}}>{options[2].contents}</StyledOption>
          <StyledOption selected={isSelected4} onClick={(): void=> {answer()}}>{options[3].contents}</StyledOption>
        </StyledDiv>
        <StyledDiv3>
          <AdminButton>
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
            <StyledScore>-</StyledScore>
            <Styledtitle>{contents}</Styledtitle>
          </StyleDiv2>
          <StyledOption selected={isSelected} onClick={(): void=> {answer()}}>{options[0].contents}</StyledOption>
          <StyledOption selected={isSelected2} onClick={(): void=> {answer()}}>{options[1].contents}</StyledOption>
          <StyledOption selected={isSelected3} onClick={(): void=> {answer()}}>{options[2].contents}</StyledOption>
          <StyledOption selected={isSelected4} onClick={(): void=> {answer()}}>{options[3].contents}</StyledOption>
        </StyledDiv>
      </>
    }
    </>
  );
}

export default Survey;
