import styled, { createGlobalStyle } from "styled-components";
import List from "./List";

function App() {
  return (
    <AppWrapper>
      <GlobalResets />
      <List></List>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
`;

const GlobalResets = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f4f5f7;
    font-family: 'Poppins', sans-serif;
  }
`;

export default App;
