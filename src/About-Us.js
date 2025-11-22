import Footers from "./components/footer_card";
import Hero_About from "./components/HeroSection_About";
import { TimelineDemo } from "./components/timline";



export default function About(){
    return(
        <div>
        <Hero_About></Hero_About>
        <TimelineDemo></TimelineDemo>
        <Footers></Footers>
        </div>
    )
}