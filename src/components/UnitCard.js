import React from "react";
import styled from "styled-components";
import Button from "./Button";

const UnitCardContainer = styled.li`
  width: 100%;
  padding: 8px;
  list-style-type: none;
  & > div {
    /* border: 1px solid black; */
  }
  &:nth-child(odd) {
    background: lightgrey;
    & > div {
      /* border: 1px solid white; */
    }
  }
`;

const UnitName = styled.h4`
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  /* border: 1px solid white; */
  padding: 8px;
  margin-top: 8px;
`;

const ModelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const ModelNumber = styled.h5`
  width: 100%;
  text-align: center;
  border: 1px solid black;
`;

const UnitCard = ({ unitName, points, addUnit, modalHandler }) => {
  function handleClick(e) {
    e.preventDefault();
    addUnit(unitName, e.target.value);
    modalHandler();
  }

  return (
    <UnitCardContainer>
      <UnitName>{unitName}</UnitName>
      <ButtonContainer>
        {Object.keys(points).map((key, index) => (
          <ModelGroup key={index}>
            <ModelNumber>
              {key} Model{key === "1" ? "" : "s"}
            </ModelNumber>
            <Button
              onClickHandler={(e) => handleClick(e)}
              value={points[key]}
              color="affirmative"
            >
              +{points[key]}
            </Button>
          </ModelGroup>
        ))}
      </ButtonContainer>
    </UnitCardContainer>
  );
};

export default UnitCard;
