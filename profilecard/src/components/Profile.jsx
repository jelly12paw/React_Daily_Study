import { useState } from 'react';

export default function Profile({image, name, title, isLogin, isLogout}) {
    return (
        <div className='profile'>
            <img className='photo' src={image} alt="" />
            {isLogin && <span className='login'></span>}
            {isLogout && <span className='logout'></span>}
            <h2 className='name'>{name}</h2>
            <p className='title'>{title}</p>
            <LikeBtn />
        </div>
    );
}

function LikeBtn() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button className='likebtn' onClick={handleClick}>
            ♥ {count}
        </button>
    );
}
