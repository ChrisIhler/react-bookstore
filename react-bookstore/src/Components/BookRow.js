import React from 'react'
import { Button } from 'react-bootstrap'

const BookRow = ( props) => {
  const bookItems = props

  return (
    
  <tr>
    <td>{bookItems.row.id}</td>
    <td>{bookItems.row.title}</td>
    <td>{bookItems.row.author}</td>
    <td>{bookItems.row.pages}</td>
    <td>${bookItems.row.price}</td>
    <td> <Button onClick={ (e) => props.addToCart(bookItems.row)} bsStyle="primary" bsSize="xsmall"> Add to cart </Button> </td>
  </tr>

  )
}

export default BookRow