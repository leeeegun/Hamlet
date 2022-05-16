import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/style';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #FFB762;
  width: 80%;
  min-height: 80vh;
  border-radius: 10px;
  margin: 1em 0 1em 0;

  & .Participant{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4F3F28;
    margin: 1em 0.4em 0 0.4em;
    width: 6em;
    height: 2em;
    text-align: center;
    border-radius: 5px;
    color: white;
  }
`;

const StyledDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;

const AdminButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pointSub2};
  margin: 0 0 1em 0;
  width: 45%;
  height: 6vh;
  border-radius: 10px;
  font: 0.7em bold;
  color: white;
  font-weight: bold;
`
const  Styledtitle = styled.label`
  margin : 2em 0 0 0;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: ${ colors.bgDark };
  margin: 0 0 1em 0;
  width: 40%;
  height: 5vh;
  border-radius: 5px;
  font: 0.9em bold;
  color: black;
  padding: 0 3em 0 0;
`;

const ParticipantAdmin = () => {
  return(
    <>
      <StyledDiv2>
        <StyledInput placeholder='제목을 입력해주세요'/>
        <Styledtitle>
          참여코드{}
        </Styledtitle>
      </StyledDiv2>
      <StyledDiv>
        <div className='Participant'>여기용</div>
        <div className='Participant'/>
        <div className='Participant'/>
        <div className='Participant'/>
        <div className='Participant'/>
        <div className='Participant'/>
        <div className='Participant'/>
        <div className='Participant'/>
        <div className='Participant'/>
      </StyledDiv>
      <StyledDiv3>
        <AdminButton>
          START
        </AdminButton>
      </StyledDiv3>
    </>
  );
}

export default ParticipantAdmin;
