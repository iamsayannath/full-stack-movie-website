import React, { createContext, useEffect, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext();

const Context = ({ children }) => {

  const [movies, setMovies] = useState([]);
  const [tvseries, setTVSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://full-stack-movie-website.onrender.com/api/movies');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      //console.log(data);
      return data;

    } catch (error) {
      console.error('Failed to fetch movies:', error);
      return [];
    };

  };

  const getTVseries = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://full-stack-movie-website.onrender.com/api/tv');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      //console.log(data);

      return data;
    } catch (error) {
      console.error('Failed to fetch TV series:', error);
      return [];
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getMovies();
      setMovies(data.movies);
    };
    fetchData();
    setLoading(false);
  }, []);


  useEffect(() => {
    setLoading(true);
    // Fetch TV series data
    const fetchData = async () => {
      const data = await getTVseries();
      setTVSeries(data.tv);
    };
    fetchData();
    setLoading(false);
  }, []);




  const value = {
    movies,
    tvseries,
    loading,
    setLoading
  };
  // Provide the context value to children components
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default Context;