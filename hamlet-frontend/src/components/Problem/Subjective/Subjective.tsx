import { useState, useEffect } from 'react'
import { hamlet2 } from '../../../types';
import { StyledDiv, StyleDiv2, StyledDiv3, StyledTimer, StyledScore, Styledtitle, StyledInput, StyledResult, AdminButton } from './styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Spinner from '../../../images/Spinner.gif';
import ConrrectAnswer from '../Result/CorrectAnswer';


type HamletProps = {
  subjective: hamlet2,
  parentCallback: () => void,
}

const Subjective = ({ subjective, parentCallback} : HamletProps) => { // poll : question
  const { questionId, kinds,  time, orders, multiple, contents, options, point} = subjective;
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);
  const [ isAdmin, setAdmin ] = useState<boolean>(false);
  const [ isloading, setLoading ] = useState<boolean>(true);
  const [ isselcted, setSelcted ] = useState<boolean>(false);
  const [ Inputvalue, setInputValue ] = useState<string>('');
  const [ isAnswer, setAnswer ] = useState<boolean>(false);
  const [ result, setresult ] = useState<boolean>(false);
  const [ answer, setanswer ] = useState<string>('');

  var time1 = (time*2)/3;
  var time2 = time/3;
  const renderTime = ({ remainingTime }:any) => {
    return (
      <StyledTimer>{remainingTime}</StyledTimer>
    );
  };

  useEffect(() => {
    if (localStorage.getItem("token")){
      setAdmin(true);
    }
  }, [])

  const selectAnswer = () => {
    setResult(true);
  }

  const select = () => {
    setSelcted(true);
  }

  const discrimination = (o: string) => {
    options.map((option) => {
      if (option.answer === true){
        setanswer(option.contents);
        if(option.contents === o){
          setAnswer(true); 
        } else {
          setAnswer(false);
        }
      } 
    })
  }

  const nextresult = () => {
    setresult(true);
  }

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
                    <StyledScore>{point}</StyledScore>
                    <Styledtitle>{contents}</Styledtitle>
                  </StyleDiv2>
                  <StyledResult>{answer}</StyledResult>
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
                    result ? // 사용자가 결과화면으로 넘어갔는지를 판별합니다. 결과화면에서는 답을 보여줍니다.
                      <>
                        <StyleDiv2>
                          <StyledScore>{point}</StyledScore>
                          <Styledtitle>{contents}</Styledtitle>
                        </StyleDiv2>
                        <StyledResult>{answer}</StyledResult>
                      </>
                    : // 사용자가 해당 문제에서 몇점을 획득했는지를 보여줍니다. 이 화면은 결과화면보다 먼저 보여집니다. 이 화면에서 넘어가기를 누르면 결과화면으로 넘어갑니다.
                      <>
                        <ConrrectAnswer point={point} isCorrect={true} />
                        <AdminButton onClick={():void=> nextresult()}>넘어가기</AdminButton>
                      </>
                  : // 사용자가 제출한 답이 오답인경우 입니다. 
                    result ? // 사용자가 결과화면으로 넘어갔는지를 판별합니다. 결과화면에서는 답을 보여줍니다.
                      <>
                        <StyleDiv2>
                          <StyledScore>{point}</StyledScore>
                          <Styledtitle>{contents}</Styledtitle>
                        </StyleDiv2>
                        <StyledResult>{answer}</StyledResult>
                      </>
                    : // 사용자가 해당 문제에서 몇점을 획득했는지를 보여줍니다. 이 화면은 결과화면보다 먼저 보여집니다. 이 화면에서 넘어가기를 누르면 결과화면으로 넘어갑니다.
                      <>
                        <ConrrectAnswer point={point} isCorrect={false} />
                        <AdminButton onClick={():void=> nextresult()}>넘어가기</AdminButton>
                      </>
                }
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
                    <StyledScore>{point}</StyledScore>
                    <Styledtitle>{contents}</Styledtitle>
                  </StyleDiv2>
                  <StyledInput placeholder='입력하세요'/>
                </StyledDiv>
                <StyledDiv3>
                  <AdminButton onClick={():void=>selectAnswer()}>
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
                  onComplete={ () => setResult(!isResult)}
                >{renderTime}</CountdownCircleTimer>
                {
                  isselcted ? // 사용자가 답을 제출했는지 판단한다. 만약 답을 이미 제출한경우 시간초가 끝날때 or 관리자가 Skip을 누를때까지 대기하는 화면을 보여준다.
                    <StyledDiv>
                      <img src={Spinner} alt="wait" />
                      <div>다른 교육생들을 기다리고 있어요</div>
                    </StyledDiv>
                  : // 아직 답을 제출하지 않은경우 입니다.
                    <StyledDiv>
                      <StyleDiv2>
                        <StyledScore>{point}</StyledScore>
                        <Styledtitle>{contents}</Styledtitle>
                      </StyleDiv2>
                      <StyledInput placeholder='입력하세요' onChange={(event) => setInputValue(event.target.value)}/>
                      <AdminButton onClick={():void => {select(); discrimination(Inputvalue); }} >제출</AdminButton>
                    </StyledDiv>
                }
              </>
      }
    </>
  );
}

export default Subjective;
