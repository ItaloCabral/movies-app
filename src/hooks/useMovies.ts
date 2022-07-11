import { useState, useCallback, useEffect } from "react";

import { MovieService, TMovieResponse } from "services";

export const useMovies = () => {
  const [movies, setMovies] = useState<TMovieResponse | []>([]);

  useEffect(() => {
    console.log(movies)
  }, [movies])

  const getTopRatedMovies = useCallback(async () => {
    const response = await MovieService.getTopRatedMovies();
    setMovies(response);
  }, []);

  return { movies, getTopRatedMovies };
}
