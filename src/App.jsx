import React, { useState } from "react";
import PublicFeed from "./components/publicFeed";
import Auth from "./components/Auth";
import MenuBar from "./components/MenuBar";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div className="flex">
      <MenuBar />
      <PublicFeed />
      <RightSideBar />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
