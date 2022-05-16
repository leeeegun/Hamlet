import { question } from '../../../types';
import { useState } from 'react'
import Timer from '../../Timer/Timer';
import { StyledDiv, StyledScore, Styledtitle, StyleDiv2, StyledOption, Styledp, Progress_span, Animate_progress } from './styles';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Survey = () => { // survey : question
  // const { q, type, time} = survey; // 설문
  const [ isSelected, setSelected ] = useState<boolean>(false);
  const [ isSelected2, setSelected2] = useState<boolean>(false);
  const [ isSelected3, setSelected3] = useState<boolean>(false);
  const [ isSelected4, setSelected4] = useState<boolean>(false);
  const [ isResult, setResult ] = useState<boolean>(false);
  //background-color: ${props => props.selected? colors.pointSub2 : colors.bgDark};
  // color: ${props => props.selected? "white" : "black" };

  
  return(
    <>
    {isResult ? 
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>-</StyledScore>
        <Styledtitle>현재 다니는 SSAFY캠퍼스는 어딘가요?</Styledtitle>
      </StyleDiv2>
      <Styledp>서울 캠퍼스 72%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={72} wcolor={"blue"}></Progress_span>
      </Animate_progress>
      <Styledp>대전 캠퍼스 13%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={13} wcolor={"red"}></Progress_span>
      </Animate_progress>
      <Styledp>부울경 캠퍼스 8%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={8} wcolor={"purple"}></Progress_span>
      </Animate_progress>
      <Styledp>구미 캠퍼스 7%</Styledp>
      <Animate_progress>
        <Progress_span data_progress={7} wcolor={"green"}></Progress_span>
      </Animate_progress>
      <br/>
    </StyledDiv>
    :
    <>
    <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={ () => setResult(!isResult)}
      ></CountdownCircleTimer>
    <StyledDiv>
      <StyleDiv2>
        <StyledScore>-</StyledScore>
        <Styledtitle>현재 다니는 SSAFY캠퍼스는 어딘가요?</Styledtitle>
      </StyleDiv2>
      <StyledOption selected={isSelected} onClick={(): void=> {if(!isSelected){setSelected(!isSelected); setSelected2(isSelected); setSelected3(isSelected); setSelected4(isSelected)}}}>여기</StyledOption>
      <StyledOption selected={isSelected2} onClick={(): void=> {if(!isSelected2){setSelected(isSelected2); setSelected2(!isSelected2); setSelected3(isSelected2); setSelected4(isSelected2)}}}>여기2</StyledOption>
      <StyledOption selected={isSelected3} onClick={(): void=> {if(!isSelected3){setSelected(isSelected3); setSelected2(isSelected3); setSelected3(!isSelected3); setSelected4(isSelected3)}}}>여기3</StyledOption>
      <StyledOption selected={isSelected4} onClick={(): void=> {if(!isSelected4){setSelected(isSelected4); setSelected2(isSelected4); setSelected3(isSelected4); setSelected4(!isSelected4)}}}>여기4</StyledOption>
    </StyledDiv>
    </>
    }
    </>
  );
}

export default Survey;
