import React from 'react';

export default function ToDos() {
    return (
        <div className='lists'>
            <label className='doneList' htmlFor="done"><i class="bi bi-calendar-check"></i> 완료한 일들만 모아보기</label>
            <input type="checkbox" name="" id="done" />
            <ul>
                <li>
                    <i class="bi bi-clipboard"></i><i class="bi bi-clipboard-check"></i>
                    <h3>타이틀</h3>
                    <h4>내용내용내용</h4>
                </li>
            </ul>
        </div>
    );
}

