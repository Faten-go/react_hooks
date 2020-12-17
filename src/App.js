import React, { useState } from "react";
import "./App.css";

import MovieData from "./components/movieList/MovieData";

import MovieList from "./components/movieList/MovieList";
import Add from './components/add/Add'
import Filter from './components/filter/Filter'
import { Switch , Route } from 'react-router-dom'
import page from './components/page'

function App() {
 const [textSearch, setTextSearch] = useState("")
 const [searchRate, setsearchRate] = useState(0) 
 const [movie, setmovie] = useState(MovieData);
const handleAdd = (newMovie) => {
  if(newMovie!=={} )
{  setmovie([...movie,newMovie] )}
}
  return (
   
    <div className="app">

<Add handleAdd={handleAdd} />
        <div className="float-right">
          <Filter rating={searchRate} setsearchRate={setsearchRate} setTextSearch={setTextSearch} />
        </div>
      
        <MovieList searchRate={searchRate} textSearch={textSearch} movie={movie} />
      
        <Switch>
          <Route exact path='/page' component={page} />
        </Switch>

     </div>
     
  
  );
}

export default App;