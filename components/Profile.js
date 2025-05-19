'use client'
import { useState } from 'react';
import MembershipCarousel from "./profileNavbar/membership/MembershipCarousal"
import About from "./profileNavbar/About"
import Collections from "./profileNavbar/Collections"

const Profile = ({username}) => {
    const user = username
    console.log("user", user)
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = ['Home', 'Collections', 'About'];
  return (
    <div className="text-white h-full ">
      <div className="w-full h-[45vh] relative overflow-hidden bg-black rounded-b-xl shadow-lg ">
        <img
          src="/gifs/space.gif"
          alt="luffyy"
          className=" absolute top-0 left-1/2 -translate-x-1/2   object-cover "
        ></img>
      </div>
      <div className=" flex flex-col space-y-1.5 items-center justify-center lg:mt-[-80px] md:mt-[-60px] mt-[-40px] ">
        <img src="/images/zoro.jpg" className="lg:w-[140px] md:w-[120px] w-[80px] lg:h-[140px] md:h-[120px] h-[80px] object-cover rounded-lg z-[10]" alt="zoro" />
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mt-4"> Roronoa Zoro</h2>
        <p className="lg:text-sm  text-xs"> The first mate of the Future Pirate King</p>
        <div className="flex gap-4 text-sm text-gray-300">
          <span className="lg:text-sm text-xs">4000 Members</span>
          <li className="lg:text-sm text-xs"> 10 Posts</li>
        </div>
        <button className="lg:text-sm text-xs bg-[#209100] font-bold text-white px-16 py-2 rounded-lg"> Join The Crew</button>
      </div>
      <nav className="border-b border-gray-700 lg:mt-12 md:mt-8 mt-4">
      <ul className="flex justify-center space-x-12 lg:text-sm text-xs">
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
  {activeTab === 'Collections' && (
    <Collections data={user}/>
  )}

    </div>
  );
};

export default Profile;
