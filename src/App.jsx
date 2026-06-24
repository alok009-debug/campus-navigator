// importing Components 
import react, { useState, useEffect } from "react";
// import Header from "./components/mainAppComponents/Header";
// import Navbar from "./components/mainAppComponents/Navbar";
// import MainArea from "./components/mainAppComponents/MainArea";
// import AdminLogin from "./components/admin_components/AdminLogin";
// import AdminPanel from "./components/admin_components/AdminPanel"; 


import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainArea from "./components/MainArea";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";

const App = () => {

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      {/* <MainArea /> */}

      {/*checking is admin logged in */}
      {!isAdminLoggedIn ? (
        <AdminLogin onLogin={setIsAdminLoggedIn} />
      ) :
        (<AdminPanel />)
      }
    </div>
  )
}

export default (App)