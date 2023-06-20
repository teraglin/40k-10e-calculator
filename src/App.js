import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./data";
import Button from "./components/Button";
import Modal from "./modules/Modal";
import UnitList from "./modules/UnitList";
import UnitCard from "./components/UnitCard";
import UnitListCard from "./components/UnitListCard";
import { Icon } from "@iconify/react";
import { breakpoints } from "./utils/breakpoints";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 16px;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
  }
`;

const ResponsiveContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${breakpoints.md}) {
    width: 50%;
    flex-shrink: 0;
    height: calc(100vh - 32px);
    overflow: scroll;
  }
`;

const ResponsiveUnitList = styled.div`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
    width: 50%;
    display: block;
    height: calc(100vh - 32px);
    overflow: scroll;
    flex-shrink: 0;
  }
`;

const HeadingContainer = styled.div`
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: black;
  border: 2px solid black;
  padding: 8px;
  margin: 0 auto;
  text-align: center;
`;

const SubHeading = styled.h6`
  color: white;
  background: black;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
`;

const IndexSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  background: lightgrey;
  padding: 8px;
`;

const IndexLabel = styled.label`
  font-weight: bold;
  text-transform: uppercase;
`;

const IndexSelect = styled.select`
  width: 100%;
  border: 2px solid white;
  background: black;
  color: white;
  padding: 8px;
  cursor: pointer;
  text-align: center;
`;

const IndexTitle = styled.h2`
  border: 2px solid black;
  width: 100%;
  padding: 8px;
  text-align: center;
`;

const Points = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

function App() {
  const [selectedIndex, setSelectedIndex] = useState({});
  const [selectedIndexTitle, setSelectedIndexTitle] = useState("");
  const [modal, setModal] = useState(false);
  const [points, setPoints] = useState(0);
  const [unitList, setUnitList] = useState([]);

  function pointValue(name, models) {
    return selectedIndex[name].points[models];
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
    tempList.splice(findeIndex, 1);
    setUnitList(tempList);
  }

  function newIndex(index) {
    setUnitList([]);
    setPoints(0);
    setSelectedIndex(data[index]);
    setSelectedIndexTitle(index.replace("_", " "));
  }

  function handleIndexChange(e) {
    e.preventDefault();
    newIndex(e.target.value);
  }

  useEffect(() => {
    newIndex("ADEPTA_SORORITAS");
  }, []);

  return (
    <AppContainer>
      <ResponsiveContainer>
        <HeadingContainer>
          <Heading>40k INDEX CALCULATOR</Heading>
          <SubHeading>for 10th edition</SubHeading>
        </HeadingContainer>
        <IndexSelectContainer>
          <IndexLabel htmlFor="indexSheet">Select an index</IndexLabel>
          <IndexSelect id="indexSheet" onChange={handleIndexChange.bind(this)}>
            {Object.keys(data).map((key, index) => (
              <option value={key} key={index}>
                {key.replace("_", " ")}
              </option>
            ))}
          </IndexSelect>
        </IndexSelectContainer>
        {selectedIndexTitle.length > 0 && (
          <>
            <IndexTitle>{selectedIndexTitle}</IndexTitle>
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
          </>
        )}
      </ResponsiveContainer>
      <ResponsiveUnitList>
        <UnitList>
          {selectedIndex &&
            Object.keys(selectedIndex).map((key, index) => (
              <UnitCard
                key={index}
                unitName={key}
                points={selectedIndex[key].points}
                addUnit={addUnit}
                modalHandler={handleModal}
              />
            ))}
        </UnitList>
      </ResponsiveUnitList>
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
