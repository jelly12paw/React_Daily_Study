import React, { useEffect, useState } from 'react';

export default function ToDos() {
    const [list, setList] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    useEffect(() => {
        fetch(`data/${checked ? 'done-' : ''}lists.json`)
            .then((res) => res.json())
            .then((data) => {setList(data);});
    }, [checked]);

    return (
        <div className='lists'>
            <label className='doneList' htmlFor="done"><i class="bi bi-calendar-check"></i> 완료한 일들만 모아보기</label>
            <input type="checkbox" name="" id="done" value={checked} onChange={handleChange} />
            <ul>
                {list.map((l) => (
                    <li style={{color: l.color, textDecoration: l.text}}>
                        <i class={l.icon}></i>
                        <h3>{l.title}</h3>
                        <h4>{l.content}</h4>
                    </li>                    
                ))}
            </ul>
        </div>
    );
}

