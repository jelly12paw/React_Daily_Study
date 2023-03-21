import React from 'react';
import styles from './ButtonIcon.module.css';

export default function ButtonIcon() {
    const btnInfo = [
        {
            img : 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40',
            text : '내게 맞는 Microsoft 365 선택하기'
        },
        {
            img : 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40',
            text : 'Surface 디바이스 쇼핑하기'
        },
        {
            img : 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/xbox-blk-logo-link-list-120x120?wid=40&hei=40',
            text : 'Xbox 게임 쇼핑'
        },
        {
            img : 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40',
            text : 'Windows 11 받기'
        }
    ]
    return (
        <div className={styles.container}>       
            {btnInfo.map((infos, idx) => (
                <div className={styles.contents} key={idx}>
                    <img className={styles.img} src={infos.img} alt="" />
                    <h3 className={styles.text}>{infos.text}</h3>
                </div>
            ))}
        </div>
    );
}

