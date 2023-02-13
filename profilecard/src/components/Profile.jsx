import { useState } from 'react';

export default function Profile({image, name, title, isLogin, isLogout}) {
    return (
        <div className='profile'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{title}</p>
            {isLogin && <span></span>}
            {isLogout && <span></span>}
        </div>
    );
}

