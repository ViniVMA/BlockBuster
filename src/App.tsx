import { Header } from "Components/Header";
import { AppWrapper } from "./styles/app.style";
import { Footer } from "Components/Footer";
import { MoviesContainer } from "Components/MoviesContainer";
import axios from "axios";
import { useEffect, useState } from "react";

// interface PostTestProps {
//   title?: string;
//   body?: string;
// }

// const baseURL = "http://localhost:3001/movies";

function App() {
  //   const [post, setPost] = useState(null);

  //   useEffect(() => {
  //     axios.get(`${baseURL}/1`).then((response) => {
  //       setPost(response.data);
  //     });
  //   }, []);

  //   function updatePost() {
  //     axios
  //       .put(`${baseURL}/1`, {
  //         title: "Hello World!",
  //         body: "This is an updated post.",
  //       })
  //       .then((response) => {
  //         setPost(response.data);
  //       });
  //   }

  //   if (!post) return "No post!";
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
