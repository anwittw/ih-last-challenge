import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'


export default function MoveToPage(props) {
  return (
    <div>
    <Link to={props.link}>
    <Card>
    <CardImg top width="100%" src={props.pictureUrl} alt="IMG of Page" />
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
    </CardBody>
  </Card>
  </Link>
    </div>
  )
}