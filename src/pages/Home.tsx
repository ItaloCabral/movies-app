import { useMovies } from "hooks";
import { useEffect } from "react";

import { MovieCard } from "components";
import { CardGrid, Title } from "styles/HomeStyles";

export function Home() {

  const { movies, getTopRatedMovies } = useMovies();

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);

  return (
    <>
      <Title>Movies List</Title>
      <CardGrid>
        {movies.map(movie =>
          <MovieCard key={movie.id}
            id={movie.id}
            title={movie.title}
            original_title={movie.original_title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            overview={movie.overview}
            />
        )}
      </CardGrid>
    </>
  );
}
