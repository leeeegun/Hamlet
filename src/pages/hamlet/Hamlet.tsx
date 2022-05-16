import { useState } from "react";
import HamletView from "./HamletView";

const Hamlet = () => {
  const [showModal, setShowModal] = useState(false);
  const props = {
    showModal,
    onModal: () => setShowModal(true),
    offModal: () => setShowModal(false),
  };
  return <HamletView {...props} />;
};

export default Hamlet;
