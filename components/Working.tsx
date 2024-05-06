"use client" 
import Image from "next/image";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

function Working ()  {
  return(
    <section className=""> 
   <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQf2c42XDYehkqYZB6PRmjyM-L2-UNiBDT_me8bKdK32CjAiCMh" 
          width={200} height={200} alt="" className="ml-28 "></Image>      
   <h1 className="font-bold text-5xl text-center m-2">How we are working?</h1>
   <div className="relative">
   <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6HbMpsoC2fjypnSjzOOEZy372E7K7po4Ntvcc5NxOpd4BMNAX" 
          width={200} height={200} alt="" className="absolute bottom-0 right-0 mr-0"></Image></div>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ml-28 mr-28">
        
        <div className=" p-2 m-2 text-center">
        
          <Image className="mx-auto mt-12 overflow-hidden rounded-full object-fit p-1 " width={100} height={100} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxYtlMy3g3c_8LJxiv_gdVXIHPixcGbLWUssDLv0WFXdmBwj9T" alt="Post Image" />
          <HiOutlineArrowTrendingDown className="absolute left-96 pt-0 text-7xl text-yellow-500"/>
          <h2 className="text-xl font-bold mb-2 text-orange-600">We receive the order</h2>
          <p className="text-black">We receive your order and contact you to clarify details.</p>
        </div>

 

        <div className=" p-4 m-5 text-center">

        <HiOutlineArrowTrendingUp  className="absolute ml-44 mx-auto mt-24  text-7xl text-yellow-500"/>


          <Image className=" mx-auto mt-24  overflow-hidden  rounded-full object-fit p-1 " width={100} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPigBS491BXNMGx8OHdwdHOCjchAX_bdLreAMgnNP6IrdPoRtN" alt="Post Image" />

          <h2 className="text-xl font-bold mb-2 text-orange-600">Preparing the order</h2>
          <p className="text-black">We prepare the order in accordance with the clients wishes</p>
          
        </div>
        <div className=" p-4 m-5 text-center">

          
          <Image className="mx-auto mt-10 items-center  overflow-hidden  rounded-full object-fit p-1 " width={100} height={100} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUq8Ir3uhSj_8ueUGZV2oIdrHjC7tkP9yowlh851ReXy9UPrvY" alt="Post Image" />
          <HiOutlineArrowTrendingDown className="absolute right-80 pt-0 text-7xl text-yellow-500"/>

          <h2 className="text-xl font-bold mb-2 text-orange-600">We send the goods</h2>
          <p className="text-black">We send the order using the method approved by you</p>
        </div>

        
        <div className=" p-4 m-5 text-center">
          <Image className=" mx-auto mt-24 items-center  overflow-hidden  rounded-full object-fit p-1 " width={100} height={100} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRAl8zkqVEeIy37J-RGF6tKhqGqIRrmQTMuyfPkrvfpMesw8fYj" alt="Post Image" />
          <h2 className="text-xl font-bold mb-2 text-orange-600">Shipping and payment</h2>
          <p className="text-black">Delivery straight to your hands</p>
        </div>
        
       

   </div>
   
   </section>
  )
}



export default Working;