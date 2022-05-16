import styled from "styled-components";

interface props {
  id: number;
  title: string;
  color: string;
}

const OneQuestion = ({ id, title, color }: props) => {
  return (
    <Question color={color}>
      <p>{`${id}. ${title}`}</p>
      <DelBtn>
        <div />
      </DelBtn>
    </Question>
  );
};

const Question = styled.div`
  width: 80%;
  height: 40px;
  padding: 8px 10px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  display: flex;

  p {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    color: white;
    width: 80%;
    height: fit-content;
    font-size: 24px;
    margin: 0;
  }

  background-color: ${({ color }: { color: string }) => color};
`;

const DelBtn = styled.button`
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 10px;
  cursor: pointer;

  div {
    position: relative;
    height: 0px;
    width: 18px;
    border-top: 4px solid black;
    border-radius: 3px;
    transform: rotate(-45deg);
  }

  div:after {
    height: 0px;
    width: 18px;
    border-top: 4px solid black;
    border-radius: 3px;
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    transform: rotate(-90deg);
  }
  background-color: transparent;
  border: none;
  height: 20px;
  padding: 0;
`;

export default OneQuestion;
