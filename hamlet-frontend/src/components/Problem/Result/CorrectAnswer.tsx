import styled from 'styled-components';



const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: columns;
  justify-content: space-around;
  background-color: #FFB762;
  width: 80%;
  min-height: 40vh;
  margin : 2em 1em 1em 1em;
  border-radius: 10px;
`;

const StyledDiv2 = styled.div<{isCorrect : boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  margin: 1em 0 1em 0;
  width: 50vh;
  height: 50vh;

  & p{
      font-weight: bold;
      color: ${props=>props.isCorrect ? "green" : "red"};
      font-size: 4em;
  }

  & p.title{
      font-weight: bold;
      color: black;
      font-size: 1em;
  }
`;

const StyledDiv3 = styled.div`
  display: inline;
  margin : 2em 0 2em 0;

  & p{
    color: white;
    font-weight: bold;
  }
`;

const ConrrectAnswer = () => {
  return(
    <StyledDiv>
      <StyledDiv2 isCorrect={true}>
        <p className="title">1256</p>
        <p>+256</p>
      </StyledDiv2>
      <StyledDiv3>
        <p>1. 이름 +999 </p>
        <p>2. 이름 +777 </p>
        <p>3. 이름 +256 </p>
      </StyledDiv3>
    </StyledDiv>
  )
}

export default ConrrectAnswer;