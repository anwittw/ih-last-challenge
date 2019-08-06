import React, {useEffect, useState} from 'react'

import {Container, Row, Col, Input} from 'reactstrap'

import axios from "axios";

import { Link } from 'react-router-dom'



export default function Celebrities() {

  const [state, setstate] = useState([])

  console.log(process.env.REACT_APP_MOVIE_API_KEY)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/popular?page=2&api_key=d2f8233274c5e68fef0151bb57c1c646`).then(response => {
      setstate(response.data.results)
    });
  }, []);





  return (
    <div>
    <Container className="mt-5">
    <Link to="/">Back</Link>
      <h1>Celebrities</h1>
      {
       // <pre>{JSON.stringify(state, null , 2)}</pre>
      }
     
      <Row>
      <Col sm={{ size: 12, offset: 0}} md={{ size: 2, offset: 0}}>
      <ul>
      { state.length > 0 && state.map((celebrity,i) => 
        <li key={i}><img src={"https://image.tmdb.org/t/p/w185/" + celebrity.profile_path} /></li> )
      }
      </ul>
      </Col>
      <Col></Col>
      </Row>
      </Container>
    </div>
  )
}