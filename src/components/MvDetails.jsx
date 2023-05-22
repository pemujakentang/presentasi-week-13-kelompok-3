import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MvDetails.css";
import axios from "axios";

const APIKEY = "f26aa62e270c3afdb3cad2ff50d2f896";

function MvDetails(props) {
  const [mvDeets, setMovie] = useState({
    title: "",
    overview: "",
    poster: "",
    id: 0,
    release_date: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const getMovie = () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjZhYTYyZTI3MGMzYWZkYjNjYWQyZmY1MGQyZjg5NiIsInN1YiI6IjY0NjliODU5YTUwNDZlMDE4OTQxYTYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8qI8lt9Dwn0FEiVz4QadE_jj_GB-iNHj4N2Y2kj6Pn8",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          const movie = {
            title: response.data.original_title,
            overview: response.data.overview,
            poster: response.data.poster_path,
            id: response.data.id,
            release_date: response.data.release_date,
          };
        //   console.log(movie);
          setMovie(movie);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getMovie();
    // console.log(mvDeets)
  }, [id]);
  return (
    <div className="d-flex flex-row">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${mvDeets.poster}`}
          alt=""
          srcset=""
        />
      </div>
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="container-detail">
          <h1>{mvDeets.title}</h1>
          <h2>{mvDeets.release_date}</h2>
          <p>{mvDeets.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MvDetails;
