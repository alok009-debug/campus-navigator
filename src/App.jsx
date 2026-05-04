import { useState, useEffect } from "react";

import Navbar from "./componenets/Navbar";
import MainArea from "./componenets/MainArea";
import Scanner from "./componenets/Scanner";


const App = () => {


  return (
    <div>
      <h2>THE Campus Navigator APP</h2>

      <Navbar />
      <MainArea />
      

    </div>
  )
}

export default (App)