import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import './MovieCard.css'
import { BsFillCaretRightFill } from "react-icons/bs";
import Rate from '../rate/Rate'
import { Link } from "react-router-dom";

function MovieCard({ movies }) {
  return (
    <div>
      <Card className="card" style={{ width: "18rem", height: "" }}>
        <Card.Text>
        
          <img src={movies.portrait} alt="pic" width="100%"></img>
        </Card.Text>
        <Card.Body>
          <ul>
              <li>Release date : {movies.date}</li>
              <li>||</li>
              <li> <Rate rating= {movies.rate} />  </li>
          </ul>
          <Card.Title className="title"> {movies.title} </Card.Title>
         
          <Card.Text>{movies.descreption}...</Card.Text>
        <Link to="/page">  Read more</Link>
        </Card.Body>

     <Link to="/page"><Button id="button"> <BsFillCaretRightFill /> Watch trailer </Button>  </Link>
      </Card>
    </div>
  );
}

export default MovieCard;