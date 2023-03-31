import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';
import { SliderSettings } from '../DataArrays/SliderSettings';

export const SsSlider = (props) => {
    var settings = SliderSettings;
    const sliderImages = props.sliderData;
    const wrapperClass = props.sliderWrapperClass;

    return (
        <>

            <Slider {...settings}>

                {
                    sliderImages.map(sliderImg => {
                        return (
                            <div key={sliderImg.id} className={wrapperClass}>
                                <img src={sliderImg.url} />
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}
