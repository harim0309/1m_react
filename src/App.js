import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./Test";
import Index from "./pages/Index";
import Splash from "./pages/Splash";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <Splash></Splash> */}
    <Navigation />
         <Routes>
           <Route path={"/test"} element={<Test/>} />
           <Route path={"/"} element={<Splash/>} />
           <Route path={"/Index"} element={<Index/>} />
           <Route path={"/search"} element={<Search/>} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
