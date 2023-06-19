import React from "react";
import styled from "styled-components";
import UnitList from "./UnitList";
import Button from "../components/Button";
import UnitCard from "../components/UnitCard";

const ModalScreen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255, 0.9);
  align-items: center;
  gap: 32px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  padding: 16px 32px;
  border: 1px solid blue;
`;

const Modal = ({ data, modalHandler, addUnit }) => {
  return (
    <ModalScreen>
      <div style={{ width: 24 }}>
        <Button color="negative" onClickHandler={modalHandler}>
          X
        </Button>
      </div>
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
