import React from 'react'
import Card from 'react-bootstrap/Card';

const HomeCard = (props) => {
  return (
    <Card style={{ maxwidth: '30rem', margin: '10px', height: "15rem" }}>
      <Card.Body style={{display: "flex", flexDirection : "column", justifyContent: "center"}} >
        <Card.Title style={{textAlign: "center"}} >{props.title}</Card.Title>
        <Card.Text style={{textAlign: "center"}}>
         {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default HomeCard
