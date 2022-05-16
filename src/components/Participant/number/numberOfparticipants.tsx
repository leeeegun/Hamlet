import React from 'react';
import parti from '../../../images/participants.png';
import { StyledParticipants } from './styles';

function NumberOfparticipants() {
  return (
    <StyledParticipants>
      <img src={parti} alt="participant" />
      &nbsp;&nbsp;
      <label>10</label>
    </StyledParticipants>
  );
}

export default NumberOfparticipants;