import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { StyledLogo, StyledApp, StyledRoom } from './styles';
import Participant from '../../components/Participant/Participant';
import NumberOfparticipants from '../../components/Participant/number/numberOfparticipants';
import ParticipantAdmin from '../../components/Participant/ParticipantAdmin';

function WaitingRoomPlayer() {
  const [isAdmin, setAdmin] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem("token")){
      setAdmin(true);
    };
  },[]);

  return (
    <StyledApp>
      <StyledRoom>
        <StyledLogo src={logo} alt="logo" />
        <label>#14D2T</label>
        <NumberOfparticipants />
        <br/>
        {
          isAdmin ? 
            <ParticipantAdmin></ParticipantAdmin>
          :
            <Participant></Participant>
        }
      </StyledRoom>
    </StyledApp>
  );
}

export default WaitingRoomPlayer;