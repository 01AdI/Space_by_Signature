import { HeroSection } from "./components/HeroSection_Home";
import TopProducts from "./components/Top_products";
import VideoHome from "./components/video_home";
import Customers_review from "./components/customer_review";
import Footers from "./components/footer_card";

export default function Homes(){
    return(
        <>
        <HeroSection></HeroSection>
        <TopProducts></TopProducts>
        <VideoHome></VideoHome>
        <Customers_review></Customers_review>
        <Footers></Footers>
        </>
    )
}