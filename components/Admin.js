"use client"
import Image from "next/image";
import tea from "../public/gifs/b5b8c7da58df37753b3786dee8b8288e.gif"
import man from "../public/images/man.jpg";
import coin from "../public/gifs/coin.gif";
import group from "../public/gifs/group.gif";
import HomeSkeleton from "../components/loaders/admin/HomeSkeleton";
import "@/globals.css"
import { useSession } from "next-auth/react";
const Admin = () => {
    const {data:session, status} = useSession();


 if(status === "loading"){
    return <HomeSkeleton/>
 }

     return (
   <>
    <div className="flex flex-col gap-4 items-center justify-center  h-[44vh]">
        <div className="text-white flex gap-2 items-center lg:text-6xl md:text-4xl text-xl font-bold">
          Buy me a Chai{" "}
          <span>
            <Image
              src={tea}
              alt="tht"
              width={40}
              height={40}
              className="lg:w-18 md:w-14 w-8 rounded-full  lg:h-18 md:h-14   h-8"
            />
          </span>
        </div>
        <p className="text-white  font-bold tracking-wide lg:text-xl md:text-base text-xs ">
          Get me a Chai is a platform for funding your projects.
        </p>
        <div className="flex  gap-2">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Start Here
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read more
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className=" text-white container mx-auto lg:py-28 py-10 md:py-14">
        <h1 className="text-center md:text-2xl text-xl mb-14 font-bold">
          {" "}
          Your Fans can buy you a chai
        </h1>
        <div className=" flex-col md:flex-row flex gap-8 md:gap-0   items-center text-white justify-around">
        <div className="items-center space-y-3  flex flex-col justify-center ">
            <Image src={man} className="rounded-full text-black" width={88} alt="" />
            <p className="font-bold">fund yourself</p>
            <p className="text-center">Your fans wants to help you</p>
          </div>
          <div className="items-center space-y-3  flex flex-col justify-center ">
            <Image src={coin} className="rounded-full text-black" width={88} alt="" />
            <p className="font-bold">fund yourself</p>
            <p className="text-center">Your fans wants to help you</p>
          </div>
          <div className="items-center space-y-3  flex flex-col justify-center ">
            <Image src={group} className="rounded-full text-black " width={88} alt="" />
            <p className="font-bold">fund yourself</p>
            <p className="text-center">Your fans wants to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className=" text-white container mx-auto lg:py-28 py-10 md:py-14">
        <h1 className="text-center md:text-2xl text-xl mb-14 font-bold">
          {" "}
          Your Fans can buy you a chai
        </h1>
        <div className=" flex-col md:flex-row flex gap-8 md:gap-0   items-center text-white justify-around">
        <div className="items-center space-y-3  flex flex-col justify-center ">
            <Image src={man} className="rounded-full text-black" width={88} alt="" />
            <p className="font-bold">fund yourself</p>
            <p className="text-center">Your fans wants to help you</p>
          </div>
          <div className="items-center space-y-3  flex flex-col justify-center ">
            <Image src={coin} className="rounded-full text-black" width={88} alt="" />
            <p className="font-bold">fund yourself</p>
            <p className="text-center">Your fans wants to help you</p>
          </div>
          <div className="items-center space-y-3  flex flex-col justify-center ">
            <Image src={group} className="rounded-full text-black " width={88} alt="" />
            <p className="font-bold">fund yourself</p>
            <p className="text-center">Your fans wants to help you</p>
          </div>
        </div>
      </div>
   </>
  )
}

export default Admin