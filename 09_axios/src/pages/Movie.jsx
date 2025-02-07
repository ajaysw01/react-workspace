import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Movie = () => {
  const [data, setData] = useState([]);
  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <ul>
        {data.map((currElem) => {
          return <Card key={currElem.imdbID} movieData={currElem} />;
        })}
      </ul>
    </>
  );
};

export default Movie;
