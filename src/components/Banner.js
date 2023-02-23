import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";
const Banner = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const URL = `https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`;
   const truncate =(str,n)=>{return(str?.length >n?str.substr(0, n-1)+" ...":str)}
  return (
    <header
    className="banner"
      style={{
        backgroundImage: `url(${URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
     <div className="banner__components">
      <h1 className="banner__title">{movies?.title||movies?.name||movies?.original_name }</h1>
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      <h1 className="banner__description">{truncate(movies?.overview,160)}</h1>
     </div>
     <div className="banner__fadebottom"/>
    </header>
  );
};
export default Banner;
