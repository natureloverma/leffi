import React from 'react'
import Button from "@/components/Button";
import Image from 'next/image';
import { FaRegCircleUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";




export default function Individual() {
  return (
    <div className="grid grid-cols-2
    bg-gradient-to-r from-yellow-200 via-yellow-400 via-yellow-500 via-orange-200 via-orange-400 to-orange-600  ">
        <div className='m-28'>
            <h1 className='text-6xl text-orange-800 font-bold m-10 mt-0 mb-5'>
            Individual
            </h1>
            <h1 className='text-5xl text-white font-bold mt-5 m-10 '>
            Set of Sweets
            </h1>
            <p className='text-black m-10 text-xl font-bold'>
            Fill out the form and we will make a set of sweets to your taste.
            </p>
            <div>

        <div className="relative">
            
        <input
        type="text"
        className=" m-5 ml-10 pl-10 pr-4 py-2 border-b-2 border-white bg-transparent text-white placeholder-white placeholder-opacity-50 focus:outline-none"
        placeholder="Evelina"
         /><div className="absolute inset-y-0 left-48 flex items-center pl-2">
         <FaRegCircleUser className="text-white ml-10" />
         </div>
         </div>

         <div className="relative">
            
        <input
        type="text"
        className=" m-5 ml-10 pl-10 pr-4 py-2 border-b-2 border-white bg-transparent text-white placeholder-white placeholder-opacity-50 focus:outline-none"
        placeholder="+38 (067) 111-11-11"
         /><div className="absolute inset-y-0 left-48 flex items-center pl-2">
         <FiPhone className="text-white ml-10" />
         </div>
     </div>
     </div>

            <div className='ml-10 text-2xl'>
            <Button>Order</Button>
            </div>
            
        </div>
        <div className='m-28'>
        <Image
            className=" items-center justify-center overflow-hidden rounded-full object-fit "
            width={500}
            height={500}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROvDz5eDqVOytMz7-C2z7WLaSffVrBCiGYZgf1_1iX0O7rvJsn"
            alt="Post Image"
          />
        </div>
    </div>
  )
}
