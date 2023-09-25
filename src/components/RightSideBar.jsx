import React from "react";
import { IoIosSearch } from "react-icons/io";
import MiniTrending from "./MiniTrending";
import FollowPeople from "./FollowPeople";

function RightSideBar() {
  return (
    <div className="hidden lg:flex flex-col w-96 gap-4">
      {/* SearchBar */}
      <div className="flex items-center mt-4">
        <IoIosSearch className="relative left-8 h-5 w-5 text-gray-600" />
        <input
          placeholder="Search"
          className="bg-gray-200 rounded-full h-10 w-72 pl-10 pb-1 placeholder:text-gray-600"
        ></input>
      </div>

      <div className="bg-slate-50 flex flex-col gap-2 w-72 ml-4 p-4">
        <p className="font-bold text-xl">Subscribe to Premium</p>
        <p className="font-semibold text-md">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="bg-black text-white font-bold rounded-full w-28 py-2">
          Subscribe
        </button>
      </div>

      {/* What's Happening? */}
      <MiniTrending />
      <FollowPeople />
    </div>
  );
}

export default RightSideBar;
