import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { api } from "services/api";
import * as S from "./newMoviesModal.style";

interface NewMoviesModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
}

export const NewMoviesModal = ({
  isOpen,
  closeModal,
  children,
  className,
  overlayClassName,
}: NewMoviesModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    api.get(`/movies`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const onSubmit = (data: any) => {
    api
      .post("/posts", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const [post, setPost] = useState(null);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={className}
      overlayClassName={overlayClassName}
      contentLabel="Example Modal"
    >
      <S.ContainerModal>
        <button onClick={closeModal}>Hello world</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Title" {...register("Title", {})} />
          <input
            type="text"
            placeholder="Director"
            {...register("Director", {})}
          />
          <input type="text" placeholder="Images" {...register("Images", {})} />
          <input type="text" placeholder="Plot" {...register("Plot", {})} />
          <input type="text" placeholder="Genre" {...register("Genre", {})} />
          <input type="datetime" placeholder="Year" {...register("Year", {})} />
          <input type="text" placeholder="ImdbID" {...register("ImdbID", {})} />

          <input type="submit" />
        </form>
      </S.ContainerModal>
    </Modal>
  );
};
