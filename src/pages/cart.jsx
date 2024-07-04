import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
    } = useCart();
  
    if (isEmpty) return <p className='flex justify-center font-extrabold'>Your cart is empty</p>;
    return (
      <div className='container mx-auto font-Sato'>
        <h5 className='flex justify-end font-black'>Total:({totalItems})</h5>
        <table className='table-auto container mx-auto flex justify-center'>
          <tbody>
          {
            items.map((item,index)=>{
              return(
                <tr key={index} >
                  <td className='size-1/12'><img src={item.image}/></td>
                  <td className='p-10'>{item.title}</td>
                  <td>{item.price}$</td>
                  <td>{item.quantity}</td>
                  <td className="font-bold">
                    <button className="mr-5" onClick={()=> updateItemQuantity(item.id, item.quantity+1)}>+</button>
                    <button className="mr-5" onClick={()=> updateItemQuantity(item.id, item.quantity-1)}>-</button>
                    <button onClick={()=> removeItem(item.id)}>Remove Item</button>
                  </td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
        <h3 className='flex justify-end font-extrabold'>Total price: {cartTotal.toFixed(2)}</h3>
      </div>
    )
}

export default Cart