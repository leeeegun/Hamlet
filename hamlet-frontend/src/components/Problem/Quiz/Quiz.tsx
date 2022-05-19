import { hamlet2 } from '../../../types';
import { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { StyledDiv, StyleDiv2, StyledDiv3, AdminButton, StyledTimer, StyleDivOption, StyledScore, Styledtitle, Animate_progress, Progress_span,StyledOption } from './styles';
import Spinner from '../../../images/Spinner.gif';
import ConrrectAnswer from '../Result/CorrectAnswer';

type HamletProps = {
  quiz: hamlet2,
  parentCallback: () => void;
}

const Quiz = ({ quiz, parentCallback} : HamletProps) => { 
  const { questionId, kinds,  time, orders, multiple, contents, options, point} = quiz;
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(false);
  const [ isloading, setLoading] = useState<boolean>(true);
  const [ isselcted, setSelcted ] = useState<boolean>(false);
  const [ isAnswer, setAnswer ] = useState<boolean>(false);
  const [ result, setresult ] = useState<boolean>(false);

  var time1 = (time*2)/3
  var time2 = time/3
  const renderTime = ({ remainingTime }:any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };

  const select = () => {
    setSelcted(true);
  }

  useEffect(() => {
    if (localStorage.getItem("token")){
      setAdmin(true);
    };
  }, [])
  
  const goResult = () =>{
    setResult(true);
  }

  const nextresult = () => {
    setresult(true);
  }

  const discrimination = (o: string) => {
    options.map((option) => {
      if(option.contents === o){
        if(option.answer === true){
          setAnswer(true);
        } else {
          setAnswer(false);
        }
      }
    })
  }

  return(
    <>
    { 
      isloading ? // 처음에 문제에 들어왔을때 3초의 대기시간을 가진다.
        <CountdownCircleTimer
          isPlaying
          duration={3}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[3,2,1,0]}
          onComplete={ () => setLoading(!isloading)}
          size={500}
        >{renderTime}</CountdownCircleTimer>
      : // 로딩이 끝난경우
        isResult ? // 문제의 지정된 시간이 끝났는가? or 관리자가 해당문제에서 Skip버튼을 눌렀는가? 만약 isResult가 true라면 결과 화면을 보여준다.
            isAdmin ? // 결과화면에서 관리자인지 판단한다, 관리자라면 결과화면에서 다음문제로 넘어가기 버튼이 존재한다.
              <>
                <StyledDiv>
                  <StyleDiv2>
                    <StyledScore>{point}</StyledScore>
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
            : // 결과화면에서 사용자인 경우이다. 사용자에게는 다음문제로 넘어가는 버튼이 존재하지 않는다.
              <StyledDiv>
                {
                  isAnswer ? // 사용자가 정답인지 오답인지를 판별합니다. 정답이라면 +점수와 함께 초록색으로 표시 오답인경우 +0과 함께 붉은색 글씨로 표시
                    result ? // 사용자가 결과화면으로 넘어갔는지를 판별합니다. 결과화면에서는 통계를 보여줍니다.
                      <>
                        <StyleDiv2>
                          <StyledScore>{point}</StyledScore>
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
                      </>
                    : // 사용자가 해당 문제에서 몇점을 획득했는지를 보여줍니다. 이 화면은 결과화면보다 먼저 보여집니다. 이 화면에서 넘어가기를 누르면 결과화면으로 넘어갑니다.
                      <>
                        <ConrrectAnswer point={point} isCorrect={true} />
                        <AdminButton onClick={():void=> nextresult()}>넘어가기</AdminButton>
                      </>
                  : // 사용자가 제출한 답이 오답인경우 입니다. 
                    result ?  // 사용자가 결과화면으로 넘어갔는지를 판별합니다. 결과화면에서는 통계를 보여줍니다.
                      <>
                        <StyleDiv2>
                          <StyledScore>{point}</StyledScore>
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
                      </>
                    : // 사용자가 해당 문제에서 몇점을 획득했는지를 보여줍니다. 이 화면은 결과화면보다 먼저 보여집니다. 이 화면에서 넘어가기를 누르면 결과화면으로 넘어갑니다.
                      <>
                        <ConrrectAnswer point={point} isCorrect={false} />
                        <AdminButton onClick={():void=> nextresult()}>넘어가기</AdminButton>
                      </>
                }
              </StyledDiv>
        : // isResult가 false인 경우, 즉, 문제가 보이는 화면이다.
          isAdmin ? // 관리자인지 판별
            <>
              <CountdownCircleTimer
                isPlaying
                duration={time}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[time, time1, time2, 0]}
                onComplete={ () => {goResult()}}
              >{renderTime}</CountdownCircleTimer>
              <StyledDiv>
                <StyleDiv2>
                  <StyledScore>{point}</StyledScore>
                  <Styledtitle>{contents}</Styledtitle>
                </StyleDiv2>
                <StyleDivOption>
                  <StyledOption className="test" onClick={(): void=> {select()}}>{options[0].contents}</StyledOption>
                  <StyledOption onClick={(): void=> {select()}}>{options[1].contents}</StyledOption>
                </StyleDivOption>
              </StyledDiv>
              <StyledDiv3>
                <AdminButton onClick={(): void=>{goResult()}}>
                  Skip
                </AdminButton>
                <AdminButton>
                  정답공개
                </AdminButton>
              </StyledDiv3>
            </>
          : // 사용자인 경우
            <>
              <CountdownCircleTimer
                isPlaying
                duration={time}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[time, time1, time2, 0]}
                onComplete={ () => {goResult()}}
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
                      <StyledScore>{point}</StyledScore>
                      <Styledtitle>{contents}</Styledtitle>
                    </StyleDiv2>
                    <StyleDivOption>
                      <StyledOption onClick={(): void=> {select(); discrimination(options[0].contents)}}>{options[0].contents}</StyledOption>
                      <StyledOption onClick={(): void=> {select(); discrimination(options[1].contents)}}>{options[1].contents}</StyledOption>
                    </StyleDivOption>
                  </StyledDiv>
              }
            </>
    }
    </>
  );
}

export default Quiz;
