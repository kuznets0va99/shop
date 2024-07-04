import React from 'react'
import {ReactComponent as Twitter} from "../img/footer/twitter.svg"
import {ReactComponent as Facebook} from "../img/footer/facebook.svg"
import {ReactComponent as Instagram} from "../img/footer/instagram.svg"
import {ReactComponent as Git} from "../img/footer/git.svg"
import {ReactComponent as VISA} from "../img/footer/Visa.svg"
import {ReactComponent as Master} from "../img/footer/Mastercard.svg"
import {ReactComponent as Paypal} from "../img/footer/Paypal.svg"
import {ReactComponent as Apay} from "../img/footer/ Pay.svg"
import {ReactComponent as Gpay} from "../img/footer/G Pay.svg"

const footer = () => {
  return (
    <footer>
      <div className="footer container mx-auto flex justify-between font-Sato mt-28">
      <div className="col1">
        <a href="#"><h1 className='font-black text-4xl'>SHOP.CO</h1></a>
        <h4 className='text-stone-400 mt-6 w-64'>We have clothes that suits your style and which you’re proud to wear. From women to men.</h4>
        <div className="social flex gap-4 mt-9">
          <div className="circle-black bg-white border border-stone-500 border-solid w-8 h-8 rounded-full flex items-center justify-center">
          <Twitter className='size-5'/>
          </div>
          <div className="circle-black bg-black w-8 h-8 rounded-full flex items-center justify-center">
          <Facebook className='size-5'/>
          </div>
          <div className="circle-black bg-white border border-stone-500 border-solid w-8 h-8 rounded-full flex items-center justify-center">
          <Instagram className='size-5'/>
          </div>
          <div className="circle-black bg-white border border-stone-500 border-solid w-8 h-8 rounded-full flex items-center justify-center">
          <Git className='size-5'/>
          </div>
        </div>
      </div>
      <div className="col2">
        <h3 className='font-medium'>Company</h3>
        <ul className='text-stone-400 mt-6'>
          <li><a href="#">About</a></li>
          <li className="mt-2 mb-2"><a href="#">Features</a></li>
          <li className="mt-2 mb-2"><a href="#">Works</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      <div className="col3">
      <h3 className='font-medium'>Help</h3>
        <ul className='text-stone-400 mt-6'>
          <li><a href="#">Customer Support</a></li>
          <li className="mt-2 mb-2"><a href="#">Delivery Details</a></li>
          <li className="mt-2 mb-2"><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="col4">
      <h3 className='font-medium'>FAQ</h3>
        <ul className='text-stone-400 mt-6'>
          <li><a href="#">Account</a></li>
          <li className="mt-2 mb-2"><a href="#">Manage Deliveries</a></li>
          <li className="mt-2 mb-2"><a href="#">Orders</a></li>
          <li><a href="#">Payments</a></li>
        </ul>
      </div>
      <div className="col5">
      <h3 className='font-medium'>Resources</h3>
        <ul className='text-stone-400 mt-6'>
          <li><a href="#">Account</a></li>
          <li className="mt-2 mb-2"><a href="#">Manage Deliveries</a></li>
          <li className="mt-2 mb-2"><a href="#">Orders</a></li>
          <li><a href="#">Payments</a></li>
        </ul>
      </div>
      </div>
      <div className="bottom container mx-auto font-Sato">
        <hr class="h-px my-8 bg-gray-200 border-0 mt-16 dark:bg-gray-700"></hr>
        <div className="content justify-between flex">
          <h6 className='text-stone-400 text-sm'>Shop.co © 2000-2023, All Rights Reserved</h6>
          <div className="pay flex gap-8 pb-20">
            <div className="box bg-white border rounded-lg flex justify-center w-14">
              <VISA className='size-9'/>
            </div>
            <div className="box bg-white border rounded-lg flex justify-center w-14">
              <Master className='size-9'/>
            </div>
            <div className="box bg-white border rounded-lg flex justify-center w-14">
              <Paypal className='size-9'/>
            </div>
            <div className="box bg-white border rounded-lg flex justify-center w-14">
              <Apay className='size-9'/>
            </div>
            <div className="box bg-white border rounded-lg flex justify-center w-14">
              <Gpay className='size-9'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer