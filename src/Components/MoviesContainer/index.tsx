import axios from "axios";
import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

import * as S from "./moviesContainer.style";
import { NewMoviesModal } from "./NewMoviesModal";
import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setMovies(response.data);
    });
  }, []);

  console.log(movies);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <S.Container>
      <S.TopContentWrapper>
        <button onClick={openModal}>Novo Filme</button>
        <NewMoviesModal
          closeModal={closeModal}
          isOpen={modalIsOpen}
          overlayClassName="overlayModal"
          className="modal"
        />
      </S.TopContentWrapper>
      <S.CardsContainer>
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
      </S.CardsContainer>
    </S.Container>
  );
};
