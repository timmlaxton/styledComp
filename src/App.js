import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Global";
import data from "./data";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#00333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
