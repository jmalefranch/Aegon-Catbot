import React from 'react';
import Lottie from 'react-lottie';
import animationCat from './cat-data.json'
import './Cat.css'

const Cat = ({history}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat
    };

    function handleOnClick(){
        history.push('/chat')
    }

    return (
        <div className='cat-container' onClick={handleOnClick}>
            <Lottie 
            options={defaultOptions}
            />
        </div>
    )
};

export default Cat;