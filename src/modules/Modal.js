import React from "react";
import styled from "styled-components";
import UnitList from "./UnitList";
import Button from "../components/Button";
import UnitCard from "../components/UnitCard";

const ModalScreen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  gap: 32px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  padding: 32px;
`;

const CloseButton = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
`;

const Modal = ({ data, modalHandler, addUnit }) => {
  return (
    <ModalScreen>
      <CloseButton>
        <Button color="negative" small onClickHandler={modalHandler}>
          X
        </Button>
      </CloseButton>
      <UnitList>
        {data
          ? Object.keys(data.units).map((key, index) => (
              <UnitCard
                key={index}
                unitName={key}
                points={data.units[key].points}
                addUnit={addUnit}
                modalHandler={modalHandler}
              />
            ))
          : null}
      </UnitList>
    </ModalScreen>
  );
};

export default Modal;
