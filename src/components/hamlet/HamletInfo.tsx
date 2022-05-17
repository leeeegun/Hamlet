import styled from "styled-components";
import OneQuestion from "./OneQuestion";

const Questions = [
  {
    id: 1,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#FF92F1",
  },
  {
    id: 2,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#FFB34F",
  },
  {
    id: 3,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#87BAF9",
  },
  {
    id: 4,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#87BAF9",
  },
  {
    id: 5,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#87BAF9",
  },
  {
    id: 6,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#87BAF9",
  },
  {
    id: 7,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#87BAF9",
  },
  {
    id: 8,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#87BAF9",
  },
  {
    id: 9,
    title: "SSAFY의 어느 캠퍼스에 다니시나요?",
    color: "#87BAF9",
  },
];

const HamletInfo = () => {
  return (
    <HamletInfoSection>
      <HamletTitle placeholder="새 햄릿" />
      <QuestionSection>
        <QuestionList>
          {Questions.map((q) => (
            <OneQuestion key={q.id} {...q} />
          ))}
        </QuestionList>
        <AddBtn>생성하기</AddBtn>
      </QuestionSection>
    </HamletInfoSection>
  );
};

const AddBtn = styled.button`
  background-color: #523e24;
  border: none;
  margin: 0;
  padding: 0;
  height: 10%;
  height: 10%;
  width: 100%;
  border-radius: 0 0 21px 21px;

  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const HamletInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
`;

const QuestionList = styled.div`
  height: 82%;
  width: 100%;
  margin: 8% 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  gap: 20px;
`;

const QuestionSection = styled.div`
  background-color: white;
  width: 100%;
  height: 50vh;
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HamletTitle = styled.input`
  width: 94%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  padding: 0px 3% 5px 3%;
  color: #fff;
  outline: none;

  font-weight: 700;
  font-size: 32px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default HamletInfo;
