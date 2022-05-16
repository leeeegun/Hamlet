import styled from "styled-components";
import AddNewHamlet from "../../components/hamlet/AddNewHamlet";
import plus from "../../images/plus.svg";

const hemletData = [
  { name: "햄릿1", color: "#FFB34F" },
  { name: "햄릿2", color: "#FF525B" },
  { name: "햄릿3", color: "#FF92F1" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
];

interface props {
  showModal: boolean;
  onModal: () => void;
  offModal: () => void;
}

const HamletView = ({ showModal, onModal, offModal }: props) => {
  return (
    <Page>
      <ToggleBar>
        <MyHamletToggle>내 햄릿</MyHamletToggle>
      </ToggleBar>
      <MyHamlets>
        <Scroll>
          {hemletData.map((hd, i) => (
            <OneHamlet key={i} color={hd.color}>
              <p>{hd.name}</p>
              <DelBtn>
                <div />
              </DelBtn>
            </OneHamlet>
          ))}
        </Scroll>
        <NewHemlet onClick={onModal}>
          <p>새 햄릿 추가</p>
          <div />
        </NewHemlet>
      </MyHamlets>
      {showModal && <AddNewHamlet offModal={offModal} />}
    </Page>
  );
};

const NewHemlet = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  div {
    width: 32px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    background-image: url(${plus});
  }
`;

const Page = styled.main`
  display: flex;
  height: 100vh;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ToggleBar = styled.div`
  width: 70vw;
  height: auto;
`;

const MyHamletToggle = styled.div`
  background-color: #523e24;
  height: 25px;
  width: fit-content;
  padding: 15px 30px 0 30px;
  border-radius: 30px 30px 0 0;
  color: white;
  font-weight: bold;
`;

const MyHamlets = styled.div`
  background-color: white;
  width: 70vw;
  height: 70%;
  border-radius: 30px;
  position: relative;
  padding: 50px;
`;

const Scroll = styled.div`
  height: 100%;
  display: grid;
  gap: 50px 0;
  grid-template-columns: repeat(4, 1fr);

  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const OneHamlet = styled.div`
  width: 220px;
  height: 200px;
  align-self: flex-start;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  background-color: ${({ color }: { color: string }) => color};
  border-radius: 20px;

  p {
    color: white;
    font-size: 40px;
  }
`;

const DelBtn = styled.button`
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  div {
    position: relative;
    height: 0px;
    width: 18px;
    border-top: 3px solid black;
    border-radius: 3px;
    transform: rotate(-45deg);
  }

  div:after {
    height: 0px;
    width: 18px;
    border-top: 3px solid black;
    border-radius: 3px;
    content: "";
    position: absolute;
    top: -3px;
    left: 0;
    transform: rotate(-90deg);
  }
  background-color: transparent;
  border: none;
  height: 20px;
  padding: 0;
`;

export default HamletView;
