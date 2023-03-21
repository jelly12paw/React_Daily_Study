import React from 'react';
import styles from './Xbox.module.css'

export default function Xbox() {
    return (
        <div className={styles.imagecard}>
            <div className={styles.content}>
                <div className={styles.title}>Xbox Series X</div>
                <div className={styles.text}>제품 역사상 가장 빠르고 강력한 Xbox</div>
                <button className={styles.btn}>지금 쇼핑하기</button>
            </div>
        </div>
    );
}

