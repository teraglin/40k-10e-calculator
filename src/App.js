import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: black;
  border: 1px solid black;
  padding: 8px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Heading></Heading>
      {/* indexSelected ? <TotalPoints /> : <IndexSelection /> */}
      {/* <List /> */}
    </AppContainer>
  );
}

export default App;
