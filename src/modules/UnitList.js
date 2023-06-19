import React from "react";
import styled from "styled-components";

const UnitListStyles = styled.ul`
  padding: 0;
  width: 100%;
`;

const UnitList = ({ children }) => {
  return <UnitListStyles>{children}</UnitListStyles>;
};

export default UnitList;
