'use client'
import { useState } from 'react';
import MembershipCarousel from "../../../components/profileNavbar/membership/MembershipCarousal"
import About from "../../../components/profileNavbar/About"
const profile = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = ['Home', 'Collections', 'About'];
  return (
    <div className="text-white h-full ">
      <div className="w-full h-[45vh] relative overflow-hidden bg-black rounded-b-xl shadow-lg ">
        <img
          src="/gifs/space.gif"
          alt="luffyy"
          className=" absolute top-0 left-1/2 -translate-x-1/2  object-cover "
        ></img>
      </div>
      <div className=" flex flex-col space-y-1.5 items-center justify-center mt-[-80px] ">
        <img src="/images/zoro.jpg" className="w-[140px] h-[140px] object-cover rounded-lg z-[10]" alt="zoro" />
        <h2 className="text-3xl font-bold mt-4"> Roronoa Zoro</h2>
        <p className="text-sm"> The first mate of the Future Pirate King</p>
        <div className="flex gap-4 text-sm text-gray-300">
          <span >4000 Members</span>
          <li> 10 Posts</li>
        </div>
        <button className="bg-[#209100] font-bold text-white px-16 py-2 rounded-lg"> Join The Crew</button>
      </div>
      <nav className="border-b border-gray-700 mt-12">
      <ul className="flex justify-center space-x-12">
        {tabs.map((tab) => (
          <li key={tab} className="relative">
            <button
              onClick={() => setActiveTab(tab)}
              className={`text-sm pb-3 px-1 transition-colors ${
                activeTab === tab ? 'text-green-400' : 'text-white'
              }`}
            >
              {tab}
            </button>

            {activeTab === tab && (
              <span
                className="absolute bottom-0 left-1/2 w-12 h-px bg-green-400 
                           -translate-x-1/2"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>

  {activeTab === 'Home' && (
  
   <MembershipCarousel />
  
  )}
  {activeTab === 'About' && (
    <About />
  )}

    </div>
  );
};

export default profile;
