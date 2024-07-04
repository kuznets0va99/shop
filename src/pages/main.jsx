import React from 'react'
import Baner from "../img/main/baner.png"
import {ReactComponent as Star} from "../img/main/star.svg"
import Slidebar from '../components/slidebar'
import Card from '../components/itemCard'
import data from "../data"

const Main = () => {
  return (
    <div className="main">
      <div className="relative flex-col flex items-center">
        <div className="absolute container flex w-full">
          <div className="content mx-auto ml-0">
          <h1 className='text-[64px] font-black mt-[106px]'>FIND CLOTHES<br/>THAT MATCHES<br/>YOUR STYLE</h1>
            <h3 className='mt-8'>Browse through our diverse range of meticulously crafted garments, designed <br/>to bring out your individuality and cater to your sense of style.</h3>
            <button className='bg-black text-white px-16 py-3 rounded-full mt-8'>Shop Now</button>
            <div className="blocks flex justify-between gap-6 w-3/6 mt-12">
              <div className="block-1">
                <h2 className='font-medium text-4xl'>200+</h2>
                <h4 className='text-stone-400'>International Brands</h4>
              </div>
              <div className="block-1">
                <h2 className='font-medium text-4xl'>2,000+</h2>
                <h4 className='text-stone-400'>High-Quality Products</h4>
              </div>
              <div className="block-1">
                <h2 className='font-medium text-4xl'>30,000+</h2>
                <h4 className='text-stone-400'>Happy Customers</h4>
              </div>
              </div>
          </div>
          <div className="block-img w-[609px]">
            <div className="left">
            <Star className='size-20 mt-[86px] ml-[430px]'/>
            </div>
            <div className="left">
              <Star className='size-14 mt-[107px]'/>
            </div>
          </div>
        </div>
        <img className="w-full h-[760px]" src={Baner} alt="" />
      </div>
      <Slidebar/>
      <div className="card">
        <div className="blockarrivals flex w-full justify-center">
        <h3 className='container font-extrabold flex justify-center text-3xl mt-[72px]'>NEW ARRIVALS</h3>
        </div>
        <div className="arrivals container mx-auto mt-14">
          <div className="cards grid grid-cols-4 gap-10 w-full">
            {
              data.productData.map((item,index)=>{
                return(
                  <Card image={item.image} title={item.title} description={item.description} price={item.price} item={item}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main