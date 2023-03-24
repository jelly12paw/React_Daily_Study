import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                <p className={styles.title}>Github User Search</p>
            </div>
        </header>
    );
}