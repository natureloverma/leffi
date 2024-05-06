"use client";
import Button from "@/components/Button";
import Image from "next/image";

function New() {
  return (
    <section className="">
      <h1 className="font-bold text-5xl text-center m-5">
        Try our new Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-28 mr-28 ">
        <div className=" p-4 m-5 text-center mix-blend-multiply ">
          <Image
            className="mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1"
            width={200}
            height={200}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsUe0J9oKM2oKw9UpO-mNWoZo--8PNCFfCrHom1kMWq_T0jMb"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2">Flamenco</h2>
          <p className="text-black">
            Classic sponge cake with custed and berries
          </p>
          <h3 className="text-xl mb-2">100g/100Rs</h3>
          <Button className="">Add to cart</Button>
        </div>

        <div className=" p-4 m-5 text-center ">
          <Image
            className="mt-12 items-center overflow-hidden w-72 h-72 rounded-full object-fit p-1 "
            width={200}
            height={200}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oBUNwFn1jMSmE7Kwj3fpsqSWS_zcgb5-HgAmYy9T3K5MiRU9"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2 ">Citrus</h2>
          <p className="text-black">
            Classic cheesecake with protein cream and lime
          </p>
          <h3 className="text-xl  mb-2">100g/150Rs</h3>
          <Button className="">Add to cart</Button>
        </div>

        <div className=" p-4 m-5 text-center">
          <Image
            className="mt-12 items-center  overflow-hidden w-72 h-72 rounded-full object-fit p-1 "
            width={200}
            height={200}
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwidk9hIdQqZTNUF05IsjU8b-JoFgaYw1AJdnglQ_UP2FoGzh4"
            alt="Post Image"
          />
          <h2 className="text-xl font-bold mb-2">Chantal</h2>
          <p className="text-black">
            Classic cheesecake with praline and berries
          </p>
          <h3 className="text-xl  mb-2">100g/180Rs</h3>
          <Button className="">Add to cart</Button>
        </div>
      </div>
    </section>
  );
}

export default New;
