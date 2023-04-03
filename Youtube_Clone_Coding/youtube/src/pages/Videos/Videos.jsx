import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    const {keyword} = useParams();
    return (
        // 키워드가 있다면 키워드 검색 결과를 보여주고 아니면 인기차트를 보여줌
        <div>
            Video {keyword ? `🔍${keyword}` : ''}
        </div>
    );
}

