// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getSearchMovies } from 'services/getMoviesApi';
// import MoviesList from 'components/MovieList/MovieList';
// import { Loader } from 'components/Loader/Loader';
import c from './Movies.module.css'

const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams({});

  return (
    <>
      {/* <form onSubmit={handleSubmit} className={c.form}> */}
      <input
        type="text"
        name="query"
        className={c.input}
        //   value={inputSearch}
        //   onChange={handleInputChange}
        placeholder="Please enter movie name"
      />

      <button type="submit" className={c.submit}>
        <span className={c.btnlabel}>Search</span>
      </button>
      {/* </form> */}
    </>
  );
};

export default Movies;
