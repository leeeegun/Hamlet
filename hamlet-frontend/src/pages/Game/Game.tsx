import React, { useEffect, useState,  useLayoutEffect } from 'react';
import logo from '../../images/logo.png';
import { question, hamlet2 } from '../../types';
import Quiz from '../../components/Problem/Quiz/Quiz';
import Survey from '../../components/Problem/Survey/Survey';
import Poll from '../../components/Problem/Poll/Poll';
import Subjective from '../../components/Problem/Subjective/Subjective';
import ConrrectAnswer from '../../components/Problem/Result/CorrectAnswer';
import Participant from '../../components/Participant/Participant';
import ParticipantAdmin from '../../components/Participant/ParticipantAdmin';
import axios from 'axios';
import { StyledLogo, StyledApp, StyledRoom } from './styles';
import Result from '../Result/Result';


const Game = ()  => { // myQs : question[]
  const [hamletdata, sethamletdata] = useState<any>([]);
  const [currenthamlet, setcurrent] = useState<any>([]);
  const hamletId = 3;

  useLayoutEffect(()=>{
    onData();
  }, []);

  const onData = async() => {
    var config = {
      method: 'get',
      url: `/questions/${hamletId}`,
    };

    try{
      const data = await axios(config);
      localStorage.setItem('index',"0");
      sethamletdata(data.data);
      setcurrent(data.data[0]);
    }catch(err){
      console.error(err);
    }
  }

  const handleCallback = () =>{
    var indexdata = localStorage.getItem('index')
    var indexdata2 = Number(indexdata);
    indexdata2 = indexdata2 + 1;
    localStorage.setItem("index",String(indexdata2))
    setcurrent(hamletdata[indexdata2]);
  };

  return (
    <>
      {
        currenthamlet ?
        <StyledApp>
          <StyledRoom>
            <StyledLogo src={logo} alt="logo" />
            {
              currenthamlet.kinds === 1
              &&
              <Quiz parentCallback={handleCallback} quiz={currenthamlet}/>
            }
            {
              currenthamlet.kinds === 2
              &&
              <Subjective parentCallback={handleCallback} subjective={currenthamlet}/>
            } 
            {
              currenthamlet.kinds === 3
              &&
              <Poll parentCallback={handleCallback}   poll={currenthamlet}/>
            }
            {
              currenthamlet.kinds === 4
              &&
              <Survey parentCallback={handleCallback} survey={currenthamlet}/>
            }
          </StyledRoom>
        </StyledApp>
        :
        <StyledApp>
          <StyledRoom>
            <StyledLogo src={logo} alt="logo" />
            <Result />
          </StyledRoom>
        </StyledApp>
      }
    </>
  );
}

export default Game;
