import React, { useState } from 'react';

export default function IdolCard({image, idolname, song, onClick, total}) {
    const [cnt, setCnt] = useState(0);

    let voteRate = 0;
    if (total) { voteRate = parseInt((cnt / total) * 100);}
    
    return (
        <div className='idol-card'>
            <img src={image} alt="" />
            <div className='voterate'>{voteRate}<span> %</span></div>
            <h1>{idolname} <span>{song}</span></h1>
            <div className='vote'>
                <p>득표수 : <span>{cnt}</span></p>
                <button className='votebtn' onClick={() => {
                    setCnt((prev) => prev + 1);
                    onClick();
                }}>
                    <i class="bi bi-heart-fill"></i>
                </button>
            </div>
        </div>
    );
}

