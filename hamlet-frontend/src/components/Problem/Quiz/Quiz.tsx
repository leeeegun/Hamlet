import { question,hamlet2, Options } from '../../../types';
import { colors } from '../../../styles/style';
import { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { StyledDiv, StyleDiv2, StyledDiv3, AdminButton, StyledTimer, StyleDivOption, StyledScore, Styledtitle, Animate_progress, Progress_span,StyledOption } from './styles';
import Spinner from '../../../images/Spinner.gif';
import ConrrectAnswer from '../Result/CorrectAnswer';

type HamletProps = {
  quiz: hamlet2,
  parentCallback: () => void;
}



// questionId, kinds, point, time, orders, multiple, contents, options
const Quiz = ({ quiz, parentCallback} : HamletProps) => { // quiz : question
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
      isloading ?
      <CountdownCircleTimer
        isPlaying
        duration={3}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[3,2,1,0]}
        onComplete={ () => setLoading(!isloading)}
        size={500}
      >{renderTime}</CountdownCircleTimer>
      :
        isResult ? 
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
            {
              isAnswer ?
                result ?
                  <>
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
                    <StyledDiv3>
                    <AdminButton onClick={(): void=> parentCallback()}>
                      다음 문제 풀기
                    </AdminButton>
                  </StyledDiv3>
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
        :
          <>
            <CountdownCircleTimer
                isPlaying
                duration={time}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[time, time1, time2, 0]}
                onComplete={ () => {goResult()}}
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
