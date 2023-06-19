import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./data";
import Button from "./components/Button";
import Modal from "./modules/Modal";

console.log("data", data);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 16px;
  position: relative;
`;

const Heading = styled.h1`
  color: black;
  border: 1px solid black;
  padding: 8px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(modal ? false : true);
  }

  useEffect(() => {
    setSelectedIndex(data.ADEPTA_SORORITAS);
  }, []);

  console.log("selectedIndex", selectedIndex);

  return (
    <AppContainer>
      <Heading>40k Index Calculator</Heading>
      {/* selectedIndex ? <TotalPoints /> : <IndexSelection /> */}
      {/* <List /> */}
      <Button color="affirmative" onClickHandler={handleModal}>
        Add Unit
      </Button>
      {modal && <Modal data={selectedIndex} modalHandler={handleModal} />}
    </AppContainer>
  );
}

export default App;
