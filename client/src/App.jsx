import React from 'react';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements,  } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<Home />} >
        <Route path='movie/:id' element={<MovieDetails />} />
      </Route>

    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
