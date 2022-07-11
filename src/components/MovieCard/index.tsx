import React from 'react';

import { AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

import { CardContainer, Content, Thumb, Rating, Description } from "./styles";

type Props = {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export const MovieCard: React.FC<Props> = ({id, title, original_title, poster_path, vote_average, overview}) => (
  <CardContainer>
    <Link to={`movie/${id}`}>

      <Thumb>
        <Rating>
          <AiOutlineStar size={20} />
          {vote_average}
        </Rating>

        <Description>
          <p> {overview} </p>
        </Description>

        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="thumb"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "https://via.placeholder.com/500x750";
          }}/>
      </Thumb>

      <Content>
        <h3>{title}</h3>
        <p>{original_title}</p>
      </Content>

    </Link>
  </CardContainer>
)