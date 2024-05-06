"use client"
import React from 'react'
import Image from 'next/image';

function Instagram() {

  return (
    <div>
        <h1 className='text-bold text-7xl m-28 text-center'>
        We are on Instagram

        </h1>
      <div className="m-28 grid grid-cols-1 md:grid-cols-3 gap-1 bg-slate-200">
        <div className=''>
        <Image
            className="m-4 items-center w-96 h-96  rounded-md object-fit border-inherit"
            width={300}
            height={300}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYXIsyPHIimE7fjWsrjP_dhpMK5tqE6hx72LnIyM5DuKHNLsBB"
            alt="Post Image"
          />        </div>

        <div className=''>
        <Image
            className="m-4 items-center w-96 h-96 rounded-md  object-fit p-1"
            width={300}
            height={300}
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQelQinq0Yfo2Ewjxv-zO1obDQ4vW2Ed2hOmio3UVn3tLavIe_B"
            alt="Post Image"
          />        </div>

        <div className=''>
        <Image
            className="m-4 items-center w-96 h-96 rounded-md  object-fit p-1"
            width={300}
            height={300}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4yfIGQe5TANZwqYoRV4UIXaCp1nGFyTgFjcnrtDxJszDHCAhf"
            alt="Post Image"
          />        </div>

        <div className=''>
        <Image
            className="m-4 items-center w-96 h-96 rounded-md  object-fit p-1"
            width={300}
            height={300}
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGFuCY4RSZ90QA7zGb-yV1edCNLT3-4UaPucfqOreBkgLUUq8r"
            alt="Post Image"
          />        </div>

        <div className=''>
        <Image
            className="m-4 items-center w-96 h-96 rounded-md  object-fit p-1"
            width={300}
            height={300}
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRZtzO4wWcua8aX5x_eYkKpHkZG6hvbjTXt3tNj04G8gHHh0R2"
            alt="Post Image"
          />        </div>

        <div className=''>
        <Image
            className="m-4 items-center w-96 h-96 rounded-md  object-fit p-1"
            width={300}
            height={300}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhVPYeqruTeWwIrJY0Mw_vrz0FYwnJaVgTdYU36lRNDd4caB4"
            alt="Post Image"
          />        </div>
        
      </div>
    </div>
  )
}

export default Instagram;