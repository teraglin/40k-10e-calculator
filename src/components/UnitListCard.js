import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
const UnitCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
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

const UnitText = styled.h5`
  width: 100%;
  /* text-align: center; */
  font-weight: bold;
`;

const UnitListCard = ({ unitName, models, points, subtractUnit }) => {
  function handleClick() {
    subtractUnit(unitName, models);
  }

  return (
    <UnitCardContainer>
      <div>
        <UnitText>{unitName}</UnitText>
        <UnitText>x{models}</UnitText>
        <UnitText>{points}pts</UnitText>
      </div>
      <Button color="negative" small onClickHandler={handleClick}>
        <Icon icon="ph:trash" />
      </Button>
    </UnitCardContainer>
  );
};

export default UnitListCard;
