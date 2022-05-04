import React from 'react';
import Rainbow from './components/hoc/Rainbow';
import '././App.css';

const About = () =>{
    return(
        <div className='container'>
            <h4 className="text-center">About Us </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias quaerat ipsa nemo, magni eos est, cupiditate necessitatibus eius hic accusantium aspernatur fugit incidunt quia itaque fugiat maiores velit rem!</p>
        </div>
    )
}

export default Rainbow( About )