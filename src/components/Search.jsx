import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const APIKEY = "f26aa62e270c3afdb3cad2ff50d2f896";

function Search(props) {
  const [searchInput, setSearchInput] = useState("");
  const [mvDeets, setDetails] = useState([]);

  async function search() {
    // console.log(searchInput)
    var response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=id-ID&query=${searchInput}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log("Search")
    // console.log(response.data.results)
    // console.log(results);
    const { results } = response.data;
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
  }

  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex w-25 justify-content-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => {
              setSearchInput(event.target.value);
              //   console.log(searchInput);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setSearchInput(event.target.value);
                // console.log(searchInput);
                search();
              }
            }}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={(event) => {
              console.log(searchInput);
              search();
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="cards">
        {mvDeets.map(({ title, overview, poster, id }) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}

export default Search;
