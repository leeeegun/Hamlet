import AddNewHamletView from "./AddNewHamletView";

interface props {
  offModal: () => void;
}

const AddNewHamlet = ({ offModal }: props) => {
  const props = {
    offModal,
  };
  return <AddNewHamletView {...props} />;
};

export default AddNewHamlet;
