import { useState, useEffect } from 'react';
import { question, hamlet2 } from '../../../types';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
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
  const [ isloading, setLoading ] = useState<boolean>(true);
  const [ Inputvalue, setInputValue ] = useState<string>('');

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

  const select = () => {
    setSelcted(true);
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
                     //결과화면에서는 사용자들이 제출한 내용이 워드클라우드로 보입니다.
            isAdmin ? // 결과화면에서 관리자인지 판단한다, 관리자라면 결과화면에서 다음문제로 넘어가기 버튼이 존재한다.
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
            : // 결과화면에서 사용자인 경우이다. 사용자에게는 다음문제로 넘어가는 버튼이 존재하지 않는다.
              <StyledDiv>
                <Styledtitle>contents</Styledtitle>
                <ReactWordcloud words={words} options={options} /> 
              </StyledDiv>
          : // 설문의견을 제출하지 않은경우
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
                  <StyledInput placeholder='입력하세요'/>
                </StyledDiv>
                <StyledDiv3>
                  <AdminButton onClick={(): void => selectAnswer()}>
                    Skip
                  </AdminButton>
                </StyledDiv3>
              </>
            : // 사용자인경우
              <>
                <CountdownCircleTimer
                  isPlaying
                  duration={time}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[time, time1, time2, 0]}
                  onComplete={ () => setResult(!isResult)}
                >{renderTime}</CountdownCircleTimer>
                {
                  isselcted ? // 설문내용을 제출했는지 판별, 이미 제출한경우 시간초가 끝날때 or 관리자가 Skip을 누를때까지 대기하는 화면을 보여준다.
                    <StyledDiv>
                      <img src={Spinner} alt="wait" />
                      <div>다른 교육생들을 기다리고 있어요</div>
                    </StyledDiv>
                  :
                    <StyledDiv>
                      <StyleDiv2>
                        <StyledScore>-</StyledScore>
                        <Styledtitle>{contents}</Styledtitle>
                      </StyleDiv2>
                      <StyledInput placeholder='입력하세요' onChange={(event) => setInputValue(event.target.value)}/>
                      <AdminButton onClick={():void => {select(); }} >제출</AdminButton>
                    </StyledDiv>
                }
              </>
      }
    </>
  );
}

export default Survey;
