import React from 'react'
import { Table } from 'react-bootstrap';
import BookRow from './BookRow.js'

const BookList = (props) => {
console.log(props.books)

    return (    
      <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Price</th>
          <th></th> 
      </tr>
      </thead>
      <tbody>
      {
        props.books && props.books.map(row =>
          <BookRow addToCart={props.addToCart} row={row} key={row.id}/>
          )
      }
      </tbody>
    </Table>
    )
    
    }  
  


export default BookList