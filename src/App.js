import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./data";
import UnitCard from "./components/UnitCard";
import Button from "./components/Button";

console.log("data", data);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 16px;
`;

const Heading = styled.h1`
  color: black;
  border: 1px solid black;
  padding: 8px;
  margin: 0 auto;
  text-align: center;
`;

const UnitList = styled.ul`
  padding: 0;
  width: 100%;
`;

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(data.ADEPTA_SORORITAS);
  }, []);

  console.log("selectedIndex", selectedIndex);

  return (
    <AppContainer>
      <Heading>40k Index Calculator</Heading>
      {/* selectedIndex ? <TotalPoints /> : <IndexSelection /> */}
      {/* <List /> */}
      <Button>Add Unit</Button>
      <UnitList>
        {selectedIndex
          ? Object.keys(selectedIndex.units).map((key, index) => (
              <UnitCard
                key={index}
                unitName={key}
                points={selectedIndex.units[key].points}
              />
            ))
          : null}
      </UnitList>
    </AppContainer>
  );
}

export default App;
