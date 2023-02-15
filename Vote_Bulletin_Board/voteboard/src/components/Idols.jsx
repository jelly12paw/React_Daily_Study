import React, { useState } from 'react';
import IdolCard from './IdolCard';

export default function Idols() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev + 1);


    return (
        <div>
            <div className='voteresult'>
                <p>총 투표수 : </p>
                <p> {count}</p>
            </div>
            <div className='container'>
                <IdolCard
                    idolname="NewJeans"
                    image="https://news.koreadaily.com/data/photo/2023/01/27/a950f672-5d73-4021-9359-d100ceac3111.jpg"
                    song="Ditto"
                    total={count}
                    onClick={handleClick} 
                />
                <IdolCard
                    idolname="LE SSERAFIM"
                    image="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/10/02/151329d0-16a2-4530-a305-02396be5fcf1.jpg"
                    song="ANTIFRAGILE"
                    total={count}
                    onClick={handleClick} 
                />
            </div>
        </div>
    );
}

