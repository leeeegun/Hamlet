import styled from "styled-components";

interface props {
  id: number;
  content: string;
  isAnswer: boolean;
  setExample: (id: number, data: string) => void;
  checkAnswer: (id: number) => void;
}

const Example = ({ id, content, isAnswer, setExample, checkAnswer }: props) => {
  const onChange = (e: any) => {
    setExample(id, e.target.value);
  };

  const Answer = () => {
    checkAnswer(id);
  };

  return (
    <OneExample>
      <ExampleText value={content} onChange={onChange} placeholder="보기" />
      <AnswerCheck isAnswer={isAnswer} onClick={Answer}>
        <span />
      </AnswerCheck>
    </OneExample>
  );
};

const OneExample = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AnswerCheck = styled.div`
  height: 20px;
  width: 20px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;

  & > span {
    position: absolute;
    width: 15px;
    height: 0;

    left: 5px;

    border-top: 3px solid
      ${({ isAnswer }: { isAnswer: boolean }) =>
        isAnswer ? "#00A776" : "#F4E9DE"};
    transform: rotate(-45deg);
  }

  & > span:after {
    content: "";
    height: 0px;
    width: 10px;
    border-top: 3px solid
      ${({ isAnswer }: { isAnswer: boolean }) =>
        isAnswer ? "#00A776" : "#F4E9DE"};
    position: absolute;
    top: -6.5px;
    left: -5px;
    transform: rotate(-90deg);
  }
`;

const ExampleText = styled.input`
  width: 80%;
  height: 30px;
  background-color: #f4e9de;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  padding: 5px 15px;
  outline: none;
`;

export default Example;
