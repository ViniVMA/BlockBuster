import * as S from "./moviesCard.style";

interface MovieCardProps {
  img?: string;
  title?: string;
  author?: string;
  description?: string;
  gender?: string;
  date?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const MovieCard = ({
  img,
  title,
  author,
  description,
  gender,
  date,
  onClick,
}: MovieCardProps) => {
  return (
    <S.MovieCard>
      <S.ImageContainer>
        <img src={img} width="227" height="400" />
      </S.ImageContainer>
      <h4>{title}</h4>
      <span>{author}</span>
      <p>{description}</p>

      <div className="genderDate">
        <span className="gender">{gender}</span>
        <span>{date}</span>
      </div>
      <button onClick={onClick}>teste</button>
    </S.MovieCard>
  );
};
