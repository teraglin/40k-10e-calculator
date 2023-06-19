import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./data";
import Button from "./components/Button";
import Modal from "./modules/Modal";

// console.log("data", data);

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

const Points = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modal, setModal] = useState(false);
  const [points, setPoints] = useState(0);
  const [unitList, setUnitList] = useState([]);

  function handleModal() {
    setModal(modal ? false : true);
  }

  function addPoints(addedPoints) {
    setPoints(parseInt(points) + parseInt(addedPoints));
  }

  function handleSubtractPoints(subtractedPoints) {
    setPoints(parseInt(points) - parseInt(subtractedPoints));
  }

  function addUnit(name, points) {
    addPoints(points);
    setUnitList(...unitList, { name: name, points: points });
  }

  useEffect(() => {
    setSelectedIndex(data.ADEPTA_SORORITAS);
  }, []);

  useEffect(() => {
    console.log(unitList);
  }, [unitList]);

  // console.log("selectedIndex", selectedIndex);

  return (
    <AppContainer>
      <Heading>40k Index Calculator</Heading>
      {/* selectedIndex ? <TotalPoints /> : <IndexSelection /> */}
      {/* <List /> */}
      <Button color="affirmative" onClickHandler={handleModal}>
        Add Unit
      </Button>
      {points > 0 && <Points>{points}pts</Points>}
      {unitList.length > 0 && (
        <ul>
          {unitList.map((unit, index) => (
            <li>{unit[index].name}</li>
          ))}
        </ul>
      )}
      {modal && (
        <Modal
          data={selectedIndex}
          modalHandler={handleModal}
          addUnit={addUnit}
        />
      )}
    </AppContainer>
  );
}

export default App;
