import React from 'react'
import { Table } from 'react-bootstrap';
import CartItems from './CartItems'
import CartTotal from './CartTotal'

const Cart = (props) => {

  let inCartItems = props.books.filter(book => 
    book.inCart === true)

  return (  
    <div>
    <h1>Cart</h1>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th></th> 
        </tr>
      </thead>
      <tbody>
        { inCartItems.map((item, i) => {
          return <CartItems key={i} inCart={item} cartNumber={i} removeFromCart={props.removeFromCart}/>
        } )
        }
        <CartTotal inCartTotal={inCartItems}/>
      </tbody>
    </Table>
    </div>

  )
}

export default Cart