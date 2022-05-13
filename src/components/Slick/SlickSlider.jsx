import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';
import { Link } from 'react-router-dom';
// import sliderImageSlick from "https://picsum.photos/200";


export const SlickSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderImages = [
        {     
            id: '1',
            url: "https://api.lorem.space/image/shoes?w=2000"
        },
        {
            id: '2',
            url: "https://api.lorem.space/image/watch?w=2000"
        },
        {
            id: '3',
            url: "https://api.lorem.space/image/furniture?w=2000"
        },
        {
            id: '4',
            url: "https://api.lorem.space/image/pizza?w=2000"
        },
        {
            id: '5',
            url: "https://api.lorem.space/image/car?w=2000"
        },
        {
            id: '6',
            url: "https://api.lorem.space/image/house?w=2000"
        }

        
    ]


    return (
        <>
          
                <Slider {...settings}>

                    {
                        sliderImages.map(sliderImg => {
                            return (
                                <div key={sliderImg.id} className="pd-slick-sl">
                                    <img src={sliderImg.url} />
                                </div>
                            )
                        })
                    }
                </Slider>

                <div className='pd-back-bread'>
                    <Link to='/'>Home</Link>
                </div>
            
        </>
    )
}