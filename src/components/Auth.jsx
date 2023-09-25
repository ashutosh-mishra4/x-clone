import React from "react";
import XLogo from "../assets/x-logo.svg";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";

function Auth() {
  return (
    <main className="flex flex-col lg:flex-row lg:justify-around lg:items-center gap-2 mx-6 my-8 sm:mx-24 lg:mx-14 xl:mx-14">
      <img src={XLogo} className="h-10 w-10 lg:h-80 lg:w-80" />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-8 lg:gap-14 mt-12 mb-6">
          <p className="font-black text-5xl lg:text-6xl">Happening Now</p>
          <p className="font-black text-2xl lg:text-3xl">Join Today.</p>
        </div>

        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-2 border-2 rounded-full border-slate-200 w-80 h-10 justify-center">
            <FcGoogle className="h-6 w-6" />
            <span className="font-poppins font-medium">
              Sign up with Google
            </span>
          </button>
          <button className="flex items-center gap-2 border-2 rounded-full border-slate-200 w-80 h-10 justify-center">
            <GrApple className="h-6 w-6" />
            <span className="font-semibold">Sign up with Apple</span>
          </button>
        </div>

        <div className="flex items-center gap-4 w-72">
          <hr className="flex-grow border-t border-slate-200" />
          <span>or</span>
          <hr className="flex-grow border-t border-slate-200" />
        </div>

        <button className="bg-twitterBlue text-white font-semibold border-2 rounded-full border-slate-200 w-80 h-10 justify-center">
          Create account
        </button>

        <p className="text-tiny w-80">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>

        <div className="flex flex-col gap-2 mt-10 font-semibold">
          <p>Already have an account?</p>
          <button className="text-twitterBlue font-semibold border-2 rounded-full border-slate-200 w-80 h-10 justify-center">
            Sign in
          </button>
        </div>
      </div>
    </main>
  );
}

export default Auth;
