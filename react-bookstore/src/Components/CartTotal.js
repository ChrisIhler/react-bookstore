import React from 'react'

const CartTotal = (props) => {

  const cartTotalPrice = props.inCartTotal.reduce((sum, item) => sum + item.price, 0)
  const cartTotalQuantity = props.inCartTotal.length

  return (
    <tr>
      <td>Total Price</td>
      <td>${cartTotalPrice}</td>
      <td>Total Quantity</td>
      <td>{cartTotalQuantity}</td>
    </tr>
  )
}


export default CartTotal

