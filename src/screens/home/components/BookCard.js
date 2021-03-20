import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const BookCard = ({ book }) => {
    console.log("e")
  let {
    isbn,
    title,
    subtitle,
   
    
  } = book;
 
  return (
    <div className="book">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Text className="book--description">{isbn}</Card.Text>
          {/* <Card.Text className="book--description">{description}</Card.Text> */}
          {/* <Card.Link href={infoLink} target="_blank" rel="noopener">Preview</Card.Link> */}
           <Link className="book" to={`/book/${book.isbn}`}>View</Link> 
        </Card.Body>
      </Card>
    </div>
  )
}

export default BookCard;