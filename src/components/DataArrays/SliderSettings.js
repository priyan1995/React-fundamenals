import SampleNextArrow from "../Common-Components/SlickNextArrow";
import { SamplePrevArrow } from "../Common-Components/SlickPrevArrow";


export const SliderSettings  = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    margin: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: 
    <SampleNextArrow
    className="pd-slder-arrow" 
    />,
    prevArrow: <SamplePrevArrow
    className="pd-slder-arrow" 
     />

}; 