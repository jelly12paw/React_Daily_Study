import React, { useEffect, useState } from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs';
import {Link, useNavigate, useParams} from 'react-router-dom';

export default function SearchHeader() {
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    // search value값이 보내지면 value값으로 url 경로를 표기
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`)
    }
    // 키워드가 업데이트될 때마다 text값을 변경
    useEffect(() => setText(keyword || ''), [keyword])
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-youtube'/>
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            <form action="" onSubmit={handleSubmit} className='w-full flex justify-center'>
                <input 
                    type="text" 
                    placeholder='Search ...' 
                    value={text} onChange={(e) => setText(e.target.value)}
                    className='w-7/12 p-2 outline-none bg-black text-gray-50'
                />
                <button className='bg-zinc-600 px-4 rounded hover:bg-zinc-500'><BsSearch/></button>
            </form>
        </header>
    );
}