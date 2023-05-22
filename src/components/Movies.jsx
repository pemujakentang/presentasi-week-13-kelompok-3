import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";
import { Route, Routes, NavLink } from "react-router-dom";
import MvDetails from "./MvDetails";

const APIKEY = "f26aa62e270c3afdb3cad2ff50d2f896";

function Movies(props) {
  const [mvDeets, setDetails] = useState([]);

  var url = props.url;
  url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=id-ID&sort_by=popularity.desc`;

  useEffect(() => {
    const getDataAxios = async () => {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log("Axios");
      console.log(response);
      // console.log(response.data);
      // // console.log(response.data.results);

      const { results } = response.data;
      // console.log(results);

      const mvDeets = results.map(
        ({ original_title, overview, poster_path, id }) => {
          return {
            title: original_title,
            overview: overview,
            poster: poster_path,
            id: id,
          };
        }
      );
      // console.log("Details");
      // console.log(mvDeets);
      setDetails(mvDeets);
    };
    getDataAxios();

    const getDataFetch = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // console.log("Fetch");
          // console.log(data);
          // console.log(data.results);
          // const { results } = data;
          // console.log(results);
          // const mvDeets = results.map(
          //   ({ original_title, overview, poster_path }) => {
          //     return {
          //       title: original_title,
          //       overview: overview,
          //       poster: poster_path,
          //     };
          //   }
          // );
          // console.log("Details");
          // console.log(mvDeets);
          // setDetails(mvDeets);
        });
    };
    getDataFetch();
  }, [setDetails]);

  return (
    <div>
      <div className="cards">
        {mvDeets.map(({ title, overview, poster, id }) => {
          return (
            <div>
              {/* <Routes>
                <Route path="/details/id" element={<MvDetails />}></Route>
              </Routes> */}
              <NavLink to={`/details/${id}`}>
                <div className="card" key={title}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster}`}
                    alt={title}
                  />
                  <div className="descriptions">
                    <h1>{title}</h1>
                    <p>{overview}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Movies.defaultProps = {
  url: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=id-ID&sort_by=popularity.desc`,
};

export { Movies };
