import React from "react";
import ReactDom from"react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router";
import Layout from "./Layout";
import About from "./About-Us";
import Categories from "./Categories";
import Homes from "./home";
import Selected_Categories from "./Selected_Categories";

function Main(){
return(
    <> 
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Homes />} />
          <Route path="/About-Us" element={<About />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Categories/:selected" element={<Selected_Categories></Selected_Categories>}/>
          <Route path="/Categories/:selected/:sub" element={<Selected_Categories />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </>
)
}

ReactDom.createRoot(document.getElementById("root")).render(Main());