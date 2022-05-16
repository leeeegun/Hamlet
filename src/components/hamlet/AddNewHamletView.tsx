import styled from "styled-components";
import CreateQuestion from "./CreateQuestion";
import HamletInfo from "./HamletInfo";

interface props {
  offModal: () => void;
}

const AddNewHamletView = ({ offModal }: props) => {
  return (
    <Frame>
      <Blur />
      <Modal>
        <HamletInfo />
        <CreateQuestion />
        <ModalOff onClick={offModal}>
          <div />
        </ModalOff>
      </Modal>
    </Frame>
  );
};

const Frame = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  position: absolute;
  width: 50vw;
  height: 60vh;
  background-color: #ff7900;
  border-radius: 50px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  padding: 5vh 0;
  justify-content: space-between;

  gap: 50px;

  padding: 50px;
`;

const Blur = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #ffffff25;
  backdrop-filter: blur(3px);
`;

const ModalOff = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;

  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  height: 20px;

  cursor: pointer;

  div {
    position: relative;
    height: 0px;
    width: 25px;
    border-top: 5px solid black;
    border-radius: 3px;
    transform: rotate(-45deg);
  }

  div:after {
    height: 0px;
    width: 25px;
    border-top: 5px solid black;
    border-radius: 3px;
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    transform: rotate(-90deg);
  }
`;
export default AddNewHamletView;
