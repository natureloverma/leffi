import Link from "next/link"
import Image from "next/image"
import { HiOutlineShoppingBag } from "react-icons/hi"

export default function Header() {
  return (
    // <header className="bg-white shadow-lg sticky top-0 flex-1">
    //     <div className="container mx-auto px-4 py-6 items-center flex ">
    //     <Link href="/" className="mb-5 md:mb-0 text-2xl font-bold text-orange-800">Sweet Paradise</Link>
    //       <nav className="space-x-4 flex   ">
    //             <Link href="/" className="text-brown-500 font-bold text-sm">Home</Link>
    //             <Link href="/contact" className="text-black font-bold text-sm">Food</Link>
    //             <Link href="/about" className="text-black font-bold text-sm">About</Link>
    //             <Link href="/contact" className="text-black font-bold text-sm">Contact</Link>
    //             <HiOutlineShoppingBag className="text-2xl text-orange-800" />  
    //         </nav>
    //     </div>
    // </header>
    <header className="sticky top-0 bg-white p-3 gap-[5vw] justify-between flex flex-col  md:flex-row items-center">
      <div className=" items-center pl-28 ">
      <Link href="/" className="mb-5 md:mb-0 text-2xl font-bold text-orange-800">Sweet Paradise</Link>
      </div>

      <ul className="flex  gap-[4vw] justify-center">
        <li className=" ">
           <Link href="/" className="text-brown-500 font-bold text-sm">Home</Link>
        </li>
        <li className="">
        <Link href="/food" className="text-black font-bold text-sm">Food</Link>
        </li>
        <li className="">
        <Link href="/about" className="text-black font-bold text-sm">About</Link>
        </li>
        <li className="">
        <Link href="/contact" className="text-black font-bold text-sm">Contact</Link>
        </li>
      </ul>
      <ul>
        <div>
          <ul className="flex gap-[1vw] pr-28">
          <HiOutlineShoppingBag className="text-2xl text-orange-800" />
          </ul>
        </div>
      </ul>
      
    </header>
  )
}


