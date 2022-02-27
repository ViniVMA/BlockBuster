import axios from "axios";
import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

import * as S from "./moviesContainer.style";
import { SubmitHandler, useForm } from "react-hook-form";
import useCollapse from "react-collapsed";

interface MoviesProvider {
  Title: string;
  Director: string;
  Images: string;
  Plot: string;
  Genre: string;
  Year: string;
  ImdbId: string;
  id: number;
}

export const MoviesContainer = () => {
  const [movies, setMovies] = useState<MoviesProvider[]>([]);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  useEffect(() => {
    api.get("/posts").then((response) => {
      setMovies(response.data);
    });
  }, [movies]);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const onSubmit = (data: any) => {
    api
      .post("/posts", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        setMovies([...movies, response.data]);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const deletePost = (id: number) => {
    api.delete(`posts/` + id).then((response) => {
      console.log("deletado");
      setMovies([...movies]);
    });
  };

  return (
    <S.Container>
      <S.Title>Filmes Disponiveis</S.Title>
      <S.CardsContainer>
        {movies.map(
          ({ Images, Title, Director, Plot, Genre, Year, imdbID, id }: any) => {
            return (
              <MovieCard
                key={id}
                title={Title}
                author={Director}
                description={Plot}
                gender={Genre}
                date={Year}
                img={Images}
                onClick={() => deletePost(id)}
              />
            );
          },
        )}
      </S.CardsContainer>

      <S.TopContentWrapper>
        <S.CollapseWrapper>
          <S.CollapseButton {...getToggleProps()}>
            {isExpanded ? "Fechar" : "Cadastrar um novo Filme"}
            <span />
          </S.CollapseButton>
          <section {...getCollapseProps()}>
            <S.ContainerModal>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Title"
                  {...register("Title", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Director"
                  {...register("Director", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Informe o Link da Imagem"
                  {...register("Images", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Plot"
                  {...register("Plot", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Genre"
                  {...register("Genre", { required: true })}
                />
                <input
                  type="datetime"
                  placeholder="Year"
                  {...register("Year", { required: true })}
                />
                <input
                  type="text"
                  placeholder="ImdbID"
                  {...register("ImdbID", {})}
                />
                <input disabled={isValid} type="submit" />
              </form>
            </S.ContainerModal>
          </section>
        </S.CollapseWrapper>
      </S.TopContentWrapper>
    </S.Container>
  );
};
