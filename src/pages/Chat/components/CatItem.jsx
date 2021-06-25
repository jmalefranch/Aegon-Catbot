import React from 'react';
import './CatItem.css';
import catImg from '../../../assets/images/cat-img.png'
import Fade from "react-reveal/Fade";

const CatItem = ({text}) =>{

    let image = ''
    if(text[0] === 'ig') {
        image = text[1]
    }
    
    return (
        <div className='cat-item-container'>
            { text.length > 0  &&
            <>
                <img src={catImg} alt='cat' />
                <div className='cat-item-messages'>
                    { image === '' && text.map((t, index) =>
                        <Fade left>
                            <label key={index} > {t} </label> 
                        </Fade>
                    )}
                    { image !== '' && 
                        <div className='img-container-cat'>
                            <img src={image} alt='' /> 
                        </div>
                    }
                </div>
            </>
            }
        </div>




        /* <div className='catitem-container'>
            <img src={catImg} alt="cat-avatar" />
            <div className="cat-item-messages">
                {text.map((t,index) =>
                 <label key={index} htmlFor="">{t}</label>
                )}
               
            </div>            
        </div> */
    )
}

export default CatItem;