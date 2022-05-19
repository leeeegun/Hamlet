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
      isloading ? // 처음에 문제에 들어왔을때 3초의 대기시간을 가진다.
        <CountdownCircleTimer
          isPlaying
          duration={3}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[3,2,1, 0]}
          onComplete={ () => setLoading(!isloading)}
          size={500}
        >{renderTime}</CountdownCircleTimer>
      : // 로딩이 끝난경우
        isResult ? // 문제의 지정된 시간이 끝났는가? or 관리자가 해당문제에서 Skip버튼을 눌렀는가? 만약 isResult가 true라면 결과 화면을 보여준다.
          isAdmin ? // 결과화면에서 관리자인지 판단한다, 관리자라면 결과화면에서 다음문제로 넘어가기 버튼이 존재한다.
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
          : // 결과화면에서 사용자인 경우이다. 사용자에게는 다음문제로 넘어가는 버튼이 존재하지 않는다.
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
      : // isResult가 false인 경우 관리자인지 판단한다. 즉, 문제가 보이는 화면이다.
        isAdmin ? // 관리자인지 판별
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
        : // 문제화면에서 사용자인경우
          <>
            <CountdownCircleTimer
              isPlaying
              duration={time}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[time, time1, time2, 0]}
              onComplete={ () => setResult(!isResult)}
            >{renderTime}</CountdownCircleTimer>
            {
              isselcted ? // 사용자가 선택지를 선택했는지를 판단한다. 만약 선택지를 선택한경우 시간초가 끝날때 or 관리자가 Skip을 누를때까지 대기하는 화면을 보여준다.
                <StyledDiv>
                  <img src={Spinner} alt="wait" />
                  <div>다른 교육생들을 기다리고 있어요</div>
                </StyledDiv>
              : // 아직 선택지를 선택하지 않은경우 정상적으로 선택지를 보여준다.
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