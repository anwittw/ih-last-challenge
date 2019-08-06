import React, { useState } from 'react'

import {Container, Row, Col, Input} from 'reactstrap'

import { Link } from 'react-router-dom'

export default function CustomizeImage() {

  const [state, setstate] = useState({
    size: 300, 
    url:"https://www.abendzeitung-muenchen.de/media.media.663e3b7d-1d0d-4222-a3a4-eef1c4df381b.original1024.jpg"
  })




  function handleOnChange(e) {

    setstate({
      ...state,
      [e.target.name]: e.target.value
    })

  }

  


  return (
    <div>
    <Container className="border" className="mt-5">
    <Link to="/">Back</Link>
    <h1 className="mb-5">Customize Images</h1>
   { 
      //<pre>{JSON.stringify(state)}</pre>
   }
   <Row className="mt-4">
   <Col sm={{ size: 10, offset: 1}} md={{ size: 8, offset: 2}}>
   <Input className="text-center"  type="text" placeholder='Link to your picture' name="url" onChange={handleOnChange} value={state.url} /></Col>
   </Row>
   <Row className="mt-4">
    <Col sm={{ size: 10, offset: 1}} md={{ size: 4, offset: 4}}>
    <p className="text-muted mb-0 small">Resize your picture using the slider</p>
    <Input className="text-center"  type="range" placeholder='resize your picture!' name="size" onChange={handleOnChange} value={state.size} min="20" max="900" /></Col>
    </Row>
    <Row className="mt-4">
    <Col sm={{ size: 10, offset: 1}} md={{ size: 8, offset: 2}}> <img src={state.url} className="img-fluid rounded"  width={state.size} /></Col>
    </Row>

    </Container>
    </div>
  )
}