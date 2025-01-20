"use client" 
import Button from "@/components/Button";
import Image from "next/image";
import YouTubeVideo from "@/components/YouTubeVideo";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import Working from "@/components/Working";
import New from "@/components/New";
import Delicious from "@/components/Delicious";
import Catalog from "@/components/Catalog";
import Individual from "@/components/Individual";
import Reviews from "@/components/Reviews";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";


export default function Home() {

  const youtubeVideoId = "https://youtu.be/CSujWKoCVB4?si=3nACqfcRsJ3vsRoI";

  return (
    <>

    <main className="grid grid-cols-2 min-h-screen ">
      <div className="flex-col-1 items-left w-full ml-28 mt-28 bg-white">
      <h1 className="mb-5 md:mb-0 text-7xl font-bold text-orange-800 pb-10">Sweet Paradise.</h1>
      <h3 className="mb-5 md:mb-0 text-6xl  pl-0">We will make your</h3>
      <h3 className="mb-5 md:mb-0 text-6xl pt-0  pl-0 pb-6">Life sweeter!</h3>
      <Button className="">Choose Dessert</Button>
      <Button className="">Create a Dessert</Button>
      <div className="flex">
        <div>
          <YouTubeVideo  videoId={youtubeVideoId}  />
        </div>
        <div>
        <h3 className=" flex-1 w-36 pt-5 pl-2 font-medium">Dessert creation process</h3>
        <br/>
        <MdOutlineSubdirectoryArrowLeft className="text-orange-500 text-9xl "/>
        </div></div>
    </div>

      <div className="bg-gradient-to-r from-white via-yellow-200 via-yellow-500 via-orange-200 to-orange-500 ">
        <ul className="mix-blend-multiply">
        
      <li className="absolute top-14 right-0 " >
      <Image src="https://img.freepik.com/premium-photo/chocolate-cupcake-with-swirl-chocolate-frosting-sprinkles-top_391229-4364.jpg?w=740" 
      width={250} height={250} alt="" className=""></Image>
      </li>
      <li className="absolute top-48 right-52">
      <Image src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL21vdGFybzdfY3VwY2FrZV9pc29sYXRlZF9vbl93aGl0ZV9iYWNrZ3JvdW5kX2RiNzYwMGNlLWVkMDMtNDFmNC04MmY0LWMxYWU1YmJhODhjM18xLmpwZw.jpg"
       width={400} height={400} alt=""></Image>
      </li>
      <li className="absolute top-80 right-0">
      <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5IZ0aBMPubwVrXqGunYR1SpmqE_W-J77-9jde51hB3V0nP7F3" 
      width={250} height={250} alt="" className=""></Image>
       </li>
       </ul>
        </div>
    </main>

    <Delicious />
   
   <New />
   
   <Working />

   <Catalog />

   <Individual />

   <Reviews />

   <Instagram />

   <Footer />

    </>
  );
  }
  
