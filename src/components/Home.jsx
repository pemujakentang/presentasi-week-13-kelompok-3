import React from "react";
import bonbon from "../assets/bonbon.jpg"
import sam from "../assets/samkeren.jpg"
import fritz from "../assets/fritz.jpg"
import stef from "../assets/stef.jpg"
import "./Home.css"

function Home(props) {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={bonbon} class="d-block" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={sam} class="d-block" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={stef} class="d-block" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={fritz} class="d-block" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1 style={{ color: "white" }}>iseng aja sih buat demo doang hehe</h1>
    </div>
  );
}

export default Home;
