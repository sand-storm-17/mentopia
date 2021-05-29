import React from 'react';
import {Card} from 'react-bootstrap';

function CardItem(props) {
  return (
    <>
      <Card style={{ width: '18rem', margin: '2rem'}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.author}</Card.Subtitle>
        <Card.Text>
          {props.body}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default CardItem;
