import React from 'react'
import Image from 'next/image'
import Button from "@/components/Button";

function Catalog() {
  return (

    <section className="">
    <h1 className="font-bold text-5xl text-center m-5">
      Catalog of Delicious Treats
    </h1>
    
    <div className=" mt-24">
        {/* https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7h7reo_qThMjWe0zl6zrh8A0jB7wSc_Q-GcZTVtQnmrL5PHO0 */}

        <ul className="flex  ml-28 mr-28 gap-20 text-center justify-center">

        <li className=" ">
        <Image className="   object-fit p-1 " width={150} height={150} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2HxCdqLZAO7VfqtpDCTTEZQmnn9KFtdaza5ijl8jlkTgZD6dJ" alt="Post Image" />
        <h2 className="text-xl font-bold mb-2">Muffins</h2>
        </li>

        <li className="">
        <Image className="   object-fit p-1 " width={100} height={100} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTN4cwjU1yjvwr4v5gVS_tagKCG8-7GdaJPbPHeg5bwGy3Uq6V" alt="Post Image" />
        <h2 className="text-xl font-bold mb-2">Cakes</h2>
        </li>

        <li className="">
        <Image className="  rounded-full object-cover " width={250} height={250} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtatb6UYvOt26DMPrX-2Ul5Y7HKlLSTFA2IGmeyE_JN0h1vRyY" alt="Post Image" />
        <h2 className="text-2xl font-bold mb-2 text-yellow-600">Cup Cakes</h2>
        </li>

        <li className="">
        <Image className="   object-fit p-1 " width={100} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnaycNP3cTEKPJcnA38GSr9mt1YxV1xdE6mVW2sfv8Btv9iCQ" alt="Post Image" />
        <h2 className="text-xl font-bold mb-2">Donuts</h2>
        </li>

        <li className="">
        <Image className="   object-fit p-1 " width={90} height={90} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1nrMkg0Jzy6gCpJW_Qni5LaWplzQr-H9pzyQutPXHPYMRaHvB" alt="Post Image" />
        <h2 className="text-xl font-bold mb-2">Macarons</h2>
        </li>
      </ul>
</div>

      


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-28 mr-28 ">
        <div className=" p-4 m-5 text-center mix-blend-multiply ">
          <Image
            className="mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1"
            width={100}
            height={100}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8dRhYI0F6WmipMEnrpAt9Ag-KBurvpk1if6isRKA8Q3UMA_pl"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2">Cupcake (Vanilla)</h2>
          <p className="text-black">
          flour, sugar, salt, milk, butter, egg, curd cheese, powdered sugar.
          </p>
          <h3 className="text-xl mb-2">UAH 55/130 g</h3>
          <Button className="">Add to cart</Button>
        </div>

        <div className=" p-4 m-5 text-center ">
          <Image
            className="mt-12 items-center overflow-hidden w-72 h-72 rounded-full object-fit p-1 "
            width={100}
            height={100}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkz_1xTaLmJAVCA-LXTSw2dSGX3biSOw67z89AkZYsyhNQmCr"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2 ">Cupcake (Raspberry)</h2>
          <p className="text-black">
          flour, sugar, salt, milk, butter, egg, raspberries, powdered sugar.
          </p>
          <h3 className="text-xl  mb-2">UAH 65/130 g</h3>
          <Button className="">Add to cart</Button>
        </div>

        <div className=" p-4 m-5 text-center">
          <Image
            className="mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1 "
            width={100}
            height={100}
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5XPyy69_Bt69xjwHZLyDbO-FzLZSM2OQNDrp2QX7qwcmVGjP0"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2">Cupcake (Cherry)</h2>
          <p className="text-black">
          flour, sugar, salt, milk, butter, egg, cocoa, cherry, powdered sugar.
          </p>
          <h3 className="text-xl  mb-2">UAH 65/130 g</h3>
          <Button className="">Add to cart</Button>
        </div>

        <div className=" p-4 m-5 text-center">
          <Image
            className="mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1 "
            width={100}
            height={100}
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5gSNVYRvl36LvmOmRaavtiKXssC-o3OqnK-mvBIcvNms3q0Ad"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2">Cupcake (Strawberry)</h2>
          <p className="text-black">
          flour, sugar, salt, milk, butter, egg, berry cream, powdered sugar.
          </p>
          <h3 className="text-xl  mb-2">UAH 65/130 g</h3>
          <Button className="">Add to cart</Button>
        </div>

        <div className=" p-4 m-5 text-center">
          <Image
            className="mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1 "
            width={100}
            height={100}
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlYBGLL1fzg4-uv3mL7uu5xSK23_MuVBWGiir9MZS5mmHtBGBY"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2">Cupcake (Chocolate)</h2>
          <p className="text-black">
          flour, sugar, salt, milk, butter, egg, cocoa, powdered sugar.
          </p>
          <h3 className="text-xl  mb-2">UAH 75/130 g</h3>
          <Button className="">Add to cart</Button>
        </div>

        <div className=" p-4 m-5 text-center">
          <Image
            className="mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1 "
            width={100}
            height={100}
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3pE7rqRzu8Q-_E1y-ZjlQU3Qh7qEt6MZ6ckP2lPnLv2j6UDLW"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2">Cupcake (Cream)</h2>
          <p className="text-black">
          flour, sugar, salt, milk, butter, egg, curd cheese, powdered sugar.
          </p>
          <h3 className="text-xl  mb-2">UAH 65/130 g</h3>
          <Button className="">Add to cart</Button>
        </div>
        
      </div>
      <div className="justify-center text-center pl-5 pr-5"><Button>Show More</Button></div>
    </section>
  )
}

export default Catalog;