import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home />}/>
      <Route path="movie/:id" element={<MovieDetails />} />
      </>
    )
  );

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
