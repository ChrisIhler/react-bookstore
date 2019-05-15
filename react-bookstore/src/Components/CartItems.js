import React from 'react'
import { Button } from 'react-bootstrap'


const CartItems = (props) => {
  const {id, title, price } = props.inCart

  return (
    <tr>
      <td>{props.cartNumber+1}</td>
      <td>{title}</td>
      <td>${price}</td>
      <td> 
        <Button bsStyle="primary" bsSize="xsmall" onClick={ (e) => props.removeFromCart(id)}> Remove from cart </Button> 
      </td>
    </tr>  
  )
}

export default CartItems