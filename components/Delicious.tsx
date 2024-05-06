"use client" 
import Image from "next/image";
import { VscCircleLarge } from "react-icons/vsc";
import { TbCircleDotted } from "react-icons/tb";

function Delicious() {
  return (
    <section>    
        
          <h1 className="font-bold text-3xl text-center m-5 mb-0 h-fit ">
            <Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSc4xI3L5JyI_NqrfGF04fMCrletvwwHyoXBBHY3wKBZXvgJAO7" 
          width={100} height={100} alt="" className="ml-28 "></Image>
          Why is it delicious here?</h1>

    <div className="flex flex-col-3 ">

      <div className="p-32 pt-3 justify-between ">

        <div className="flex items-center ">

          <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQaZGClub3Y5hXJreJlpDujIQXy9JdWx-2LwzQfUeWC8AJXZgfH" 
          width={50} height={50} alt="Product" className="m-14 mt-2 " ></Image>
          <div className="pb-10"><h5>Quality</h5>Products</div>

          
        </div>
        <div className="flex items-center ">
          <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWCfqB-nrRNSSH8tx8huV4GWkZVODox35pytosM6XnFOCcSPJR" 
          width={50} height={50} alt="" className="pt-14 "></Image>
          <div className="pl-10 pt-12"><h5>Unique</h5>Recipes</div>
        </div>
        <div className="flex items-center ">
          <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQl9guBGiLlbKyHmkmIzd3bjEzxHTXOfCaxgQtu0ZWtJFVToTcj" 
          width={50} height={50} alt="" className="m-14 mt-36"></Image>
          <div className="pl-0 pt-24"><h5>The Best</h5>Confectioners</div>
          </div>
        </div>

        <div className="flex justify-center  ">
        <VscCircleLarge  className="absolute pt-0 w-96 h-96 text-yellow-500 font-thin" />
        <TbCircleDotted className="absolute pt-0 w-96 h-96 text-orange-500 font-thin"/>

          <Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRapSNxMD9Mjsju6OMBxo3kmGl0lIP9VdjQhPFB5olj7EdfEAjZ" 
          width={200} height={200} alt="" className=" mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1 "></Image>
        </div>
          
      <div className="p-32 pt-3 justify-between">
        <div className="flex   ">
          <div className="pt-3"><h5>Expensive</h5>Equipment</div>
          <Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT73N9L2BWitLWVrtEtEAY2CihLD9bj85JO4Uo6ETzpwplVCPip" 
          width={50} height={50} alt="" className="m-14 mt-2"></Image>
        </div>
        <div className="flex  ">
          <div className="pt-20 pl-12"><h5>Affordable</h5>Prices</div>
          <Image src="https://www.muffinboutique.com/wp-content/uploads/2021/05/Testimonials2-150x150.jpg" 
          width={50} height={50} alt="" className="pt-16 ml-20"></Image>
        </div>
        <div className="flex items-center ">
          <div className="pl-0 pr-5 pt-12"><h5>Loyalty</h5>Program</div>
         <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLc-0RyE6CT97kZSe5pZQtw0tcUq0JbyP7p5aAAONTZXoxA2nc" 
          width={50} height={50} alt="" className="m-14 mt-24"></Image>
        </div>  
        
   </div>  
   </div>
   <div className="relative">
   <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQf2c42XDYehkqYZB6PRmjyM-L2-UNiBDT_me8bKdK32CjAiCMh" 
          width={200} height={200} alt="" className="absolute bottom-0 right-0 mr-0"></Image></div> 
   </section>
  );
}

export default Delicious;
