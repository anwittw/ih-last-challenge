import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import MoveToPage from '../MoveToPage'

export default function Home() {
  return (
    <div>
    <Container className="mt-5">
      <h1 className="mb-5">Solution</h1>
      <Row>
      <Col sm={{ size: 10, offset: 1}} md={{ size: 2, offset: 2}}>
      <MoveToPage  link ="/temperature" title="Temperature" pictureUrl="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/Color-Temperature.jpg?itok=yHYqoXAf"/>


      </Col>
      <Col sm={{ size: 10, offset: 1}} md={{ size: 2, offset: 1}}>       <MoveToPage  link ="/customize-images" title="Customize a Image!" pictureUrl="https://cdn.icon-icons.com/icons2/930/PNG/512/camera_icon-icons.com_72364.png"/></Col>
      <Col sm={{ size: 10, offset: 1}} md={{ size: 2, offset: 1}}>      <MoveToPage  link ="/celebrities" title="Find Celebrities" pictureUrl="https://previews.123rf.com/images/palette7/palette71112/palette7111200056/11652791-star-on-the-hollywood-walk-of-fame-at-hollywood-blvd.jpg"/></Col>
      </Row>
    </Container>
    </div>
  )
}