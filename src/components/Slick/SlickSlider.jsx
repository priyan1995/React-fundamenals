import React from 'react';
import { Link } from 'react-router-dom';
import { SliderImages } from '../DataArrays/SliderImages';
import { SsSlider } from '../Sliders/SsSlider';



export const SlickSlider = () => {

    const sliderImages = SliderImages;


    return (
        <>

            <SsSlider
                sliderData={sliderImages}
                sliderWrapperClass="pd-slick-sl"
            />

            <div className='pd-back-bread'>
                <Link to='/'>Home</Link>
            </div>

        </>
    )
}