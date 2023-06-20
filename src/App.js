import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./data";
import Button from "./components/Button";
import Modal from "./modules/Modal";
import UnitList from "./modules/UnitList";
import UnitListCard from "./components/UnitListCard";
import { Icon } from "@iconify/react";

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

  function pointValue(name, models) {
    return selectedIndex.units[name].points[models];
  }

  function handleModal() {
    setModal(modal ? false : true);
  }

  function addPoints(addedPoints) {
    setPoints(parseInt(points) + parseInt(addedPoints));
  }

  function subtractPoints(subtractedPoints) {
    setPoints(parseInt(points) - parseInt(subtractedPoints));
  }

  function addUnit(name, models) {
    addPoints(pointValue(name, models));
    setUnitList([...unitList, { name: name, models: models }]);
  }

  function subtractUnit(name, models) {
    subtractPoints(pointValue(name, models));
    const tempList = unitList;
    const findeIndex = unitList.findIndex(
      (e) => e.name === name && e.models === models
    );
    console.log("name", name);
    console.log("models", models);
    console.log(findeIndex);
    tempList.splice(findeIndex, 1);
    setUnitList(tempList);
  }

  useEffect(() => {
    setSelectedIndex(data.ADEPTA_SORORITAS);
  }, []);

  useEffect(() => {
    console.log(unitList);
  }, [unitList]);

  return (
    <AppContainer>
      <Heading>40k Index Calculator</Heading>
      <Button onClickHandler={handleModal}>
        Add Unit <Icon icon="ic:baseline-plus" />
      </Button>
      {points > 0 && <Points>{points}pts</Points>}
      {unitList.length > 0 && (
        <UnitList>
          {unitList.map((unit, index) => (
            <UnitListCard
              key={index}
              unitName={unit.name}
              models={unit.models}
              points={pointValue(unit.name, unit.models)}
              subtractUnit={subtractUnit}
            >
              {unit.name}
            </UnitListCard>
          ))}
        </UnitList>
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
