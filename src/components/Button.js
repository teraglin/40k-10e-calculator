import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  height: ${(props) => (props.$small ? "32px" : "24px")};
  ${(props) => props.$small && "max-width: 32px"};
  border: 0;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

const Button = ({ children, color, small, onClickHandler, value }) => {
  return (
    <StyledButton
      onClick={onClickHandler}
      $color={color}
      $small={small}
      value={value ? value : ""}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
