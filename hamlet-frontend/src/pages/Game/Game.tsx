import { useEffect, useState, useCallback } from 'react';
import logo from '../../images/logo.png';
import { question, hamlet2 } from '../../types';
import Quiz from '../../components/Problem/Quiz/Quiz';
import Problem from '../../components/Problem/Problem';
import Poll from '../../components/Problem/Poll/Poll';
import Survey from '../../components/Problem/Survey/Survey';
import Subjective from '../../components/Problem/Subjective/Subjective';
import ConrrectAnswer from '../../components/Problem/Result/CorrectAnswer';
import Result from '../../components/Problem/Result/Result';
import styled from 'styled-components';
import Participant from '../../components/Participant/Participant';
import ParticipantAdmin from '../../components/Participant/ParticipantAdmin';
import axios from 'axios';
import { StyledLogo, StyledApp, StyledRoom } from './styles';


const Game = ()  => { // myQs : question[]
  const [hamletdata, sethamletdata] = useState<hamlet2[]>([]);
  const [currenthamlet, setcurrent] = useState<any>();
  const [isclicked, setclikced] = useState<boolean>(false);
  const hamletId = 0;
  var i = 0;
  
  useEffect(()=>{
    onData();
  }, []);

  useEffect(()=>{
    change();
  }, [isclicked]);
  
  const onData = async() => {
    var config = {
      method: 'get',
      url: `/questions/${hamletId}`,
    };
    try{
      const data = await axios(config);
      sethamletdata(data.data);
      setcurrent(hamletdata[0]);
    }catch(err){
      console.error(err);
    }
  }

  
  const change = () => {
    setcurrent(hamletdata[i]);
    i ++;
  }

  const handleCallback = useCallback(() =>{
    setclikced(!isclicked);
  },[isclicked]);

  return (
    <StyledApp>
      <StyledRoom>
        <StyledLogo src={logo} alt="logo" />
        if (currenthamlet.kinds === 0){
          <Quiz parentCallback={handleCallback} quiz={currenthamlet} />
        } else if (currenthamlet.kinds === 1){
          <Poll poll={currenthamlet} />
        } else if (currenthamlet.kinds === 0){
          <Subjective subjective={currenthamlet} />
        } else {
          <Survey survey={currenthamlet} />
        }
      </StyledRoom>
    </StyledApp>
  )
  // {hamletdata.map((hamletarr: hamlet2) => {
  //   if (hamletarr.kinds === 0){
  //     return <Quiz quiz={hamletarr} />
  //   } else if (hamletarr.kinds === 1){
  //     return <Poll poll={hamletarr}  />
  //   } else if (hamletarr.kinds === 2){
  //     return <Subjective subjective={hamletarr} />
  //   } else if (hamletarr.kinds === 3){
  //     return <Survey survey={hamletarr} />
  //   }
  // })}

  // return (
  //   <StyledApp>
  //     <StyledRoom>
  //       <StyledLogo src={logo} alt="logo" />
  //     </StyledRoom>
  //   </StyledApp>
  // );
}

export default Game;
