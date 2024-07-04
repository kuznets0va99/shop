import React from 'react'
import {useCart} from "react-use-cart"
import data from "../data"

const ItemCard = (props) => {
  const {addItem} = useCart();
  return (
    <div className='h-[408px] w-full font-Sato my-24 '>
      <div className="photo rounded-3xl flex justify-center items-center w-60">
        <div className="picture"><img className="h-[298px] ml-10"src={props.image} /></div></div>
      <div className="description w-[295px]">
        <h4 className='font-bold text-xl text-center mt-4 mb-12 h-10'>{props.title}</h4>
        <p className='text-xs overflow-hidden text-ellipsis w-[295px] h-20 text-center'>{props.description}</p>
        <h5 className='price font-bold text-2xl flex justify-center mt-2'>${props.price}</h5>
        <div className="block-button flex justify-center">
        <button className='bg-black font-medium text-white px-16 py-2 rounded-full mt-2' onClick={()=>addItem(props.item)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard