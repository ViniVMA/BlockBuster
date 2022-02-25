import axios from "axios";

import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

import * as S from "./moviesContainer.style";

const baseURL = "http://localhost:3002/movies";

interface MoviesProps {
  image: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  published: string;
  id: string;
}

export const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovies(response.data);
    });
  }, []);

  console.log(movies);

  return (
    <S.Container>
      {movies.map(
        ({ Images, Title, Director, Plot, Genre, Year, imdbID }: any) => {
          return (
            <MovieCard
              key={imdbID}
              title={Title}
              author={Director}
              description={Plot}
              gender={Genre}
              date={Year}
              img={Images}
            />
          );
        },
      )}
    </S.Container>
  );
};
