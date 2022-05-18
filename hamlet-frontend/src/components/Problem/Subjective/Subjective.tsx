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
  const [isloading, setLoading] = useState<boolean>(true);
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
        :
          <StyledDiv>
            {
              isAnswer ?
                result ?
                  <>
                    <StyleDiv2>
                      <StyledScore>{point}</StyledScore>
                      <Styledtitle>{contents}</Styledtitle>
                    </StyleDiv2>
                    <StyledResult>{answer}</StyledResult>
                  </>
                :
                  <>
                    <ConrrectAnswer point={point} isCorrect={true} />
                    <AdminButton onClick={():void=> nextresult()}>넘어가기</AdminButton>
                  </>
              :
                result ?
                  <>
                    <StyleDiv2>
                      <StyledScore>{point}</StyledScore>
                      <Styledtitle>{contents}</Styledtitle>
                    </StyleDiv2>
                    <StyledResult>{answer}</StyledResult>
                  </>
                :
                  <>
                    <ConrrectAnswer point={point} isCorrect={false} />
                    <AdminButton onClick={():void=> nextresult()}>넘어가기</AdminButton>
                  </>

            }
            
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
