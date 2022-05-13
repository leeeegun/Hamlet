import { useEffect, useState } from 'react';
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


const StyledLogo = styled.img`
  height: 12vmin;
  pointer-events: none;
`;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledRoom = styled.div`
  background-color: #FF961C;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const Game = ()  => { // myQs : question[]
  // const [hamletdata, sethamletdata] = useState<hamlet2[]>([]);
  // const onData = async() => {
  //   var config = {
  //     method: 'get',
  //     url: `k6a206.p.ssafy.io:8080//questions/{hamletId}`,
  //   };

  //   try{
  //     const data = await axios(config);
  //     sethamletdata(data.data)
  //     for (let ham of hamletdata){
  //       if (ham.kinds === 0){
  //         return (
  //           <StyledApp>
  //             <StyledRoom>
  //               <StyledLogo src={logo} alt="logo" />
  //               <Quiz quiz={ham} />
  //             </StyledRoom>
  //           </StyledApp>
  //         );
  //       } else if (ham.kinds === 1){
  //         return (
  //           <StyledApp>
  //             <StyledRoom>
  //               <StyledLogo src={logo} alt="logo" />
  //               <Poll poll={ham}  />
  //             </StyledRoom>
  //           </StyledApp>
  //         );
  //       } else if (ham.kinds === 2){
  //         return (
  //           <StyledApp>
  //             <StyledRoom>
  //               <StyledLogo src={logo} alt="logo" />
  //               <Subjective subjective={ham} />
  //             </StyledRoom>
  //           </StyledApp>
  //         );
  //       } else if (ham.kinds === 3){
  //         return (
  //           <StyledApp>
  //             <StyledRoom>
  //               <StyledLogo src={logo} alt="logo" />
  //               <Survey survey={ham} />
  //             </StyledRoom>
  //           </StyledApp>
  //         );
  //       }
  //     }
  //   }catch(err){
  //     console.error(err);
  //   }
  // }

  // useEffect(()=>{
  //   onData()
  // }, [])
  return (
    <StyledApp>
      <StyledRoom>
        <StyledLogo src={logo} alt="logo" />
        <Survey />
      </StyledRoom>
    </StyledApp>
  );
}

export default Game;
