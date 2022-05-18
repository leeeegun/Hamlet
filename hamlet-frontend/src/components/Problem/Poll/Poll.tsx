import { useEffect, useState } from 'react';
import { hamlet2 } from '../../../types';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { StyledDiv, Styledtitle, StyleDiv2, StyledTimer, StyledScore,  Styledp, StyledOption, Animate_progress, Progress_span, StyledDiv3, AdminButton } from './styles';
import Spinner from '../../../images/Spinner.gif';

type HamletProps = {
  poll: hamlet2,
  parentCallback: () => void;
}

const Poll = ({poll, parentCallback} : HamletProps) => {
  const { questionId, kinds, time, orders, multiple, contents, options} = poll;
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(false);
  const [ answerData, setAnswerData] = useState<string>('');
  const [ isAnswer, setAnswer ] = useState<boolean>(false);
  const [isloading, setLoading] = useState<boolean>(true);
  const [ isselcted, setSelcted ] = useState<boolean>(false);

  var time1 = (time*2)/3
  var time2 = time/3
  const renderTime = ({ remainingTime }: any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };
  
  const selectAnswer = (ans: string) => {
    if (ans === answerData){
      setAnswer(true);
    }
  }

  const goResult = () =>{
    setResult(true);
  }

  const select = () => {
    setSelcted(true);
  }

  useEffect(() => {
    if (localStorage.getItem("token")){
      setAdmin(true);
    };
    options.map((option) => {
      if (option.answer === true){
        setAnswerData(option.contents);
      }
    });
  }, [])

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
            colorsTime={[time, time1, time2, 0]}
            onComplete={ () => setResult(!isResult)}
          >{renderTime}</CountdownCircleTimer>
          <StyledDiv>
            <StyleDiv2>
              <StyledScore>-</StyledScore>
              <Styledtitle>{contents}</Styledtitle>
            </StyleDiv2>
            <StyledOption>{options[0].contents}</StyledOption>
            <StyledOption>{options[1].contents}</StyledOption>
            <StyledOption>{options[2].contents}</StyledOption>
            <StyledOption>{options[3].contents}</StyledOption>
          </StyledDiv>
          <StyledDiv3>
            <AdminButton onClick={(): void=>{goResult()}}>
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
          {
            isselcted ?
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
                <StyledOption onClick={(): void=> {select(); selectAnswer(options[0].contents)}}>{options[0].contents}</StyledOption>
                <StyledOption onClick={(): void=> {select(); selectAnswer(options[1].contents)}}>{options[1].contents}</StyledOption>
                <StyledOption onClick={(): void=> {select(); selectAnswer(options[2].contents)}}>{options[2].contents}</StyledOption>
                <StyledOption onClick={(): void=> {select(); selectAnswer(options[3].contents)}}>{options[3].contents}</StyledOption>
              </StyledDiv>
          }
        </>
      }
      </>
  );
}

export default Poll;