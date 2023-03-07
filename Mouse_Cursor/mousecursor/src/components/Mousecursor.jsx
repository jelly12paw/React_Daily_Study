import React, { useState } from 'react';

export default function Mousecursor() {
    const [position, setPosition] = useState({x: 0, y: 0});
    return (
        <div className='container' onPointerMove={(e) => {setPosition({x: e.clientX, y: e.clientY})}}>
            <div className="cursor" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}/>
        </div>
    );
}

