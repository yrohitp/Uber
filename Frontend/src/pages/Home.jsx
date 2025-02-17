import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <div>
       <div className = 'bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1721797027/assets/a8/5e653a-7f01-4e73-a555-7e13ef45347b/original/Airports--Reserve-35.png)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className = 'w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" />
        <div className = 'bg-white pb-7 py-4 px-4'>
            <h2 className = 'text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
       </div>
       
    </div>
  )
}
export default Home;
