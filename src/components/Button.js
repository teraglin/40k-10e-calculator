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
`;

const Button = ({ children, color }) => {
  return <StyledButton $color={color}>{children}</StyledButton>;
};

export default Button;
