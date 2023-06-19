import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background: ${(props) => {
    if (props.$color === "affirmative") {
      return "green";
    } else if (props.$color === "negative") {
      return "crimson";
    } else {
      return "black";
    }
  }};
  padding: 4px;
  width: 100%;
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

const Button = ({ children, color, onClickHandler, value }) => {
  return (
    <StyledButton
      onClick={onClickHandler}
      $color={color}
      value={value ? value : ""}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
