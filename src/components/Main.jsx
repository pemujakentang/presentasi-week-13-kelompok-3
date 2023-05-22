import React, { useState } from "react";
import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

import { Movies } from "./Movies";
import ViewTops from "./ViewTops";

const Home = lazy(() => import("./Home"));
const Search = lazy(() => import("./Search"));
const MvDetails = lazy(() => import("./MvDetails"));
const Serial = lazy(() => import("./Serial"));

function Main(props) {
  return (
    <div>
      <Navbar />
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center">
            <h1>Loading...</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/charttoppers" element={<ViewTops/>}>
            <Route path="populerfilm" element={<Movies />}></Route>
            <Route path="populertv" element={<Serial />}></Route>
          </Route>
          {/* <Route path="/populerfilm" element={<Movies />}></Route>
          <Route path="/populertv" element={<Serial />}></Route> */}
          <Route path="/search" element={<Search />}></Route>
          <Route path="/details/:id" element={<MvDetails />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Main;
