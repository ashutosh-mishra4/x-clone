import React, { useState } from "react";
import XLogo from "../assets/x-logo.svg";
import { RiHome7Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbNotes } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { HiOutlinePlusSm } from "react-icons/hi";

function MenuBar() {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <aside>
      {/*For Desktop Screens*/}
      <div className="hidden xl:flex flex-col h-screen mt-4 gap-6 text-xl">
        <img src={XLogo} className="h-8 w-8 cursor-pointer" />

        <button
          className="flex active:font-semibold hover:bg-slate-400 rounded-full gap-4 bg-blue-500"
          onClick={handleOnClick}
        >
          <RiHome7Fill className="w-7 h-7 cursor-pointer" />
          <p>Home</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <FiSearch className="w-7 h-7 cursor-pointer" />
          <p>Explore</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <GoBell className="w-7 h-7 cursor-pointer" />
          <p>Notifications</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <HiOutlineEnvelope className="w-7 h-7 cursor-pointer" />
          <p>Messages</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <TbNotes className="w-7 h-7 cursor-pointer" />
          <p>Lists</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <MdOutlinePeopleAlt className="w-7 h-7 cursor-pointer" />
          <p>Communities</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <FaXTwitter className="w-7 h-7 cursor-pointer" />
          <p>Verified</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <IoPersonOutline className="h-7 w-7 cursor-pointer" />
          <p>Profile</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <TbDotsCircleHorizontal className="h-7 w-7 cursor-pointer" />
          <p>More</p>
        </button>

        <button className="flex active:font-semibold gap-4">
          <p className="bg-twitterBlue text-white px-24 py-4 font-bold text-base rounded-full cursor-pointer">
            Post
          </p>
        </button>
      </div>

      {/*For Tablet Screens*/}
      <div className="hidden sm:flex xl:hidden flex-col w-20 items-center mt-4 gap-6 fixed left-0">
        <img src={XLogo} className="h-8 w-8 cursor-pointer" />
        <button>
          <RiHome7Fill className="w-7 h-7 cursor-pointer" />
        </button>
        <button>
          <FiSearch className="w-7 h-7 cursor-pointer" />
        </button>
        <button>
          <GoBell className="w-7 h-7 cursor-pointer" />
        </button>
        <button>
          <HiOutlineEnvelope className="w-7 h-7 cursor-pointer" />
        </button>
        <button>
          <TbNotes className="w-7 h-7 cursor-pointer" />
        </button>
        <button>
          <MdOutlinePeopleAlt className="w-7 h-7 cursor-pointer" />
        </button>
        <button>
          <FaXTwitter className="w-7 h-7 cursor-pointer" />
        </button>
        <button>
          <IoPersonOutline className="h-7 w-7 cursor-pointer" />
        </button>
        <button>
          <TbDotsCircleHorizontal className="h-7 w-7 cursor-pointer" />
        </button>
        <button>
          <HiOutlinePlusSm className="bg-twitterBlue text-white h-12 w-12 p-2 rounded-full cursor-pointer" />
        </button>
      </div>

      {/*For Mobile Screens - Bottom Menubar*/}
      <div className="flex fixed bottom-0 justify-around w-screen h-12 border-t border-slate-200 z-10 bg-white items-center sm:hidden">
        <button>
          <RiHome7Fill className="w-7 h-7" />
        </button>
        <button>
          <FiSearch className="w-7 h-7" />
        </button>
        <button>
          <GoBell className="w-7 h-7" />
        </button>
        <button>
          <HiOutlineEnvelope className="w-7 h-7" />
        </button>
      </div>
    </aside>
  );
}

export default MenuBar;
