import React from 'react';
import styles from './Goods.module.css';
import {AiOutlineRight} from 'react-icons/ai';

export default function Goods({ data, isBusiness }) {

    const productData = data;
    const business = isBusiness;
    
    return (
        <>
            <div className={business ? styles['active'] : styles['deactive']}>비즈니스용</div>        
            <div className={styles.cards}>
                {productData.map((datas, idx) => (
                    <div className={styles.card} key={idx}>
                        <img className={styles.img} src={datas.img} alt="" />
                        {datas.new ? <div className={styles.new}>신제품</div> : ''}
                        <div className={styles.title}>{datas.title}</div>
                        <div className={styles.text}>{datas.text}</div>
                        <div className={styles.detail}>{datas.detail} <AiOutlineRight className={styles.detailicon}/></div>
                    </div>
                ))}
            </div>
        </>
    );
}

