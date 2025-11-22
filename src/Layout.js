import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="bg-[#eae5df] ">
      <Navbar />
      <Outlet /> {/*All pages will render here */}  
    </div>
  );
}
