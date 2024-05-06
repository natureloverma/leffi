"use client"
import Link from "next/link"


export default function Footer() {
    return (
      <footer className="flex  items-center bg-yellow-500 text-center text-white">
        <div className=" items-center pl-28  m-10">
      <Link href="/" className="mb-5 md:mb-0 text-2xl font-bold text-orange-800">Sweet Paradise</Link>
      </div>

      <ul className="flex  gap-[4vw] justify-center pl-20">
        <li className=" ">
           <Link href="/" className="text-brown-500 font-bold text-sm">Home</Link>
        </li>
        <li className="">
        <Link href="/food" className=" font-bold text-sm">Food</Link>
        </li>
        <li className="">
        <Link href="/about" className="font-bold text-sm">About</Link>
        </li>
        <li className="">
        <Link href="/contact" className=" font-bold text-sm">Contact</Link>
        </li>
      </ul>
      <div />
      <div className="flex">
        <p className="pl-20"> Copyright &copy; 2024 All rights reserved</p>
      </div>
      
          
         
          
      </footer>
    )
  }
  
  