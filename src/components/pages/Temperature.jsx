import React, { useState } from 'react'

import {Container, Row, Col, Input} from 'reactstrap'
import RenderPicture from '../RenderPicture';

import { Link } from 'react-router-dom'


export default function Temparature() {

  const [state, setstate] = useState({
    tempInput: undefined
  })




  function handleOnChange(e) {

    setstate({
      ...state,
      tempInput: e.target.value
    })

  }


  return (
    <div>
    <Container className="border" className="mt-5">
    <Link to="/">Back</Link>
    <h1 className="mb-5">Temperature Checker</h1>
   { 
    // <pre>{JSON.stringify(state)}</pre>
   }
    <Row>
    <Col sm={{ size: 10, offset: 1}} md={{ size: 4, offset: 4}}>
    <Input className="text-center"  type="number" placeholder='Please type your Temperature!' name="tempInput" onChange={handleOnChange} value={state.tempInput} /></Col>
    </Row>
    <Row className="mt-5">
    <Col sm={{ size: 10, offset: 1}} md={{ size: 8, offset: 2}}>
    <RenderPicture temp={state.tempInput} />
    </Col>
    </Row>
    </Container>
    </div>
  )
}