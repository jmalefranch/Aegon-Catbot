import React from "react";
import './UserItem.css'
import userAvatar from '../../../assets/images/user.png'
import Fade from 'react-reveal/Fade';

const UserItem = ({text}) => {
    return(
        <div className='user-item-container'>
           
            <div className="user-item-messages">
            <Fade right>
                <label htmlFor="">{text}</label>
                </Fade >
            </div>
            <img src={userAvatar} alt="user-avatar" />
        </div>
    )
};

export default UserItem;