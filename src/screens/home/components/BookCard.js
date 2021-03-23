import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


const BookCard = ({ book }) => {
    
  let {
    
    title,
    firstAuthor,
    description
    
  } = book;
 
  return (
    <div className="book">
   
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{firstAuthor}</Card.Subtitle>
          <Card.Text className="book--description">{description}</Card.Text>
           <Link className="book" to={`/book/${book.isbn13}`}>View</Link> 
        </Card.Body>
      </Card>
    </div>
  )
}

export default BookCard;