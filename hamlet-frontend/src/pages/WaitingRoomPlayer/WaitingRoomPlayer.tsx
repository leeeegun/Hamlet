import React from 'react';
import logo from '../../logo.png';
import { StyledLogo, StyledApp, StyledRoom } from './styles';
import Participant from '../../components/Participant/Participant';

function WaitingRoomPlayer() {
  
  return (
    <StyledApp>
      <StyledRoom>
        <StyledLogo src={logo} alt="logo" />
        <label>#14D2T</label>
        <Participant></Participant>
      </StyledRoom>
      
    </StyledApp>
  );
}

export default WaitingRoomPlayer;