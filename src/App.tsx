import { Header } from "Components/Header";
import { AppWrapper } from "./styles/app.style";
import { Footer } from "Components/Footer";
import { MoviesContainer } from "Components/MoviesContainer";

function App() {
  return (
    <>
      <Header />
      <AppWrapper className="App">
        <MoviesContainer />
      </AppWrapper>
      <Footer />
    </>
  );
}

export default App;
