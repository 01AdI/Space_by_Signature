import Cards_Categories from "./components/Card_Categories"
import Footers from "./components/footer_card"
import HeroSlideshow from "./components/HeroSection_Categories"

export default function Categories(){
    return(
        <div>
        <HeroSlideshow></HeroSlideshow>
        <Cards_Categories></Cards_Categories>
        <Footers></Footers>
        </div>
    )
}