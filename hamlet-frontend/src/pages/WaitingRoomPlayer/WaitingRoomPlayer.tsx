<<<<<<< HEAD
import React from 'react';
import logo from '../../images/logo.png';
import { StyledLogo, StyledApp, StyledRoom } from './styles';
import Participant from '../../components/Participant/Participant';
import NumberOfparticipants from '../../components/Participant/number/numberOfparticipants';

function WaitingRoomPlayer() {
  
  return (
    <StyledApp>
      <StyledRoom>
        <StyledLogo src={logo} alt="logo" />
        <label>#14D2T</label>
        <NumberOfparticipants />
        <br/>
        <Participant></Participant>
      </StyledRoom>
    </StyledApp>
  );
}

export default WaitingRoomPlayer;
=======
export {}
>>>>>>> 05c0232451d7cab136ca4ffbb73b49a03cffff15
