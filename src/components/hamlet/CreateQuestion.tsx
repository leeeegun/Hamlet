import { useState } from "react";
import styled, { css } from "styled-components";
import Example from "./Example";

const CreateQuestion = () => {
  const [select, setSelect] = useState<number>(0);
  const [testExample, setTestExample] = useState([
    {
      id: 0,
      content: "1111111111",
      isAnswer: true,
    },
    {
      id: 1,
      content: "",
      isAnswer: false,
    },
    {
      id: 2,
      content: "",
      isAnswer: false,
    },
    {
      id: 3,
      content: "",
      isAnswer: false,
    },
    {
      id: 4,
      content: "",
      isAnswer: false,
    },
  ]);

  const setExample = (id: number, data: string) => {
    setTestExample(
      testExample.map((t) => (t.id === id ? { ...t, content: data } : t))
    );
  };

  const selectClick = (num: number): void => {
    setSelect(num);
  };

  const checkAnswer = (id: number) => {
    setTestExample(
      testExample.map((t) =>
        t.id === id ? { ...t, isAnswer: !t.isAnswer } : t
      )
    );
  };

  return (
    <CreateQuestionSection>
      <QuestionForm>
        <Question>
          <TypeSelect>
            <Type onClick={() => selectClick(0)} select={select} seleId={0}>
              퀴즈
            </Type>
            <Type onClick={() => selectClick(1)} select={select} seleId={1}>
              투표
            </Type>
            <Type onClick={() => selectClick(2)} select={select} seleId={2}>
              주관식
            </Type>
            <Type onClick={() => selectClick(3)} select={select} seleId={3}>
              설문
            </Type>
          </TypeSelect>
          <QuestionSetting>
            <QuestionNumber>1.</QuestionNumber>
            <div>
              <Setting>
                <p>제한시간</p>
                <input type="number" min={0} />
                <p>초</p>
              </Setting>
              <Setting>
                <p>배점</p>
                <input type="number" min={0} />
                <p>점</p>
              </Setting>
            </div>
          </QuestionSetting>
          <QuestionText placeholder="질문을 입력하세요." />
          <Explan>
            <p>보기</p>
            <p>정답</p>
          </Explan>
          <Examples>
            {testExample.map((exam) => (
              <Example
                key={exam.id}
                checkAnswer={checkAnswer}
                setExample={setExample}
                {...exam}
              />
            ))}
            <AddExample>
              <div />
            </AddExample>
          </Examples>
        </Question>
        <PatchBtn>수정</PatchBtn>
      </QuestionForm>
    </CreateQuestionSection>
  );
};

const QuestionNumber = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Setting = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  & > p {
    margin: 0;

    font-size: 16px;
  }
  & > input {
    border: none;
    background-color: #f4e9de;
    width: 45px;
    height: 25px;
    outline: none;
    padding-left: 10px;
    text-align: right;
    border-radius: 13px;
  }
`;

const QuestionSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  & > div {
    display: flex;
    gap: 20px;
  }
`;

const AddExample = styled.div`
  cursor: pointer;

  width: 20px;
  padding: 10px 0px;

  & > div {
    position: relative;
    /* height: 3px; */
    width: 18px;
    border-top: 4px solid black;
    border-radius: 3px;
    transform: rotate(0deg);
  }

  & > div:after {
    height: 0px;
    width: 18px;
    border-top: 4px solid black;
    border-radius: 3px;
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    transform: rotate(90deg);
  }
`;

const TypeSelect = styled.span`
  position: absolute;
  top: -30px;
  left: 0;
  width: 88%;
  margin: 0 20px;
  display: flex;
  justify-content: flex-start;
`;

interface TypeStyleProps {
  select: number;
  seleId: number;
}

const selectColor = ({ select, seleId }: TypeStyleProps) => {
  const color = ["#FFB34F", "#FF91F1", "#FF525B", "#87BAF9"][select];
  return (
    select === seleId &&
    css`
      background-color: ${color};
    `
  );
};

const Type = styled.div`
  height: 20px;
  width: 50px;
  text-align: center;
  padding: 10px 15px 0 15px;
  background-color: rgba(79, 63, 40, 0.5);
  border-radius: 30px 30px 0 0;
  color: white;
  font-weight: 700;

  ${selectColor}
`;

const CreateQuestionSection = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Examples = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 5px;
  height: 20vh;
  overflow-y: auto;
`;

const Explan = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 30px;

  & > p {
    font-size: 16px;
    margin: 0;
  }
`;

const QuestionText = styled.textarea`
  background-color: #f4e9de;
  border: none;
  outline: 0;
  resize: none;
  width: 90%;
  height: 40px;
  border-radius: 21px;
  padding: 10px 5%;
  font-size: 16px;
  margin-top: 10px;
`;

const Question = styled.div`
  height: 30vh;
`;

const QuestionForm = styled.div`
  height: 50vh;
  background-color: white;
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  & > div {
    padding: 6%;
    height: 88%;
  }
`;

const PatchBtn = styled.button`
  height: 5vh;
  width: 100%;
  border-radius: 0 0 21px 21px;
  background-color: #523e24;
  border: none;

  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export default CreateQuestion;
