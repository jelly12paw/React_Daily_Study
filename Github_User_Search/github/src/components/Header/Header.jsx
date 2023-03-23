import React from 'react';
import {Input, ConfigProvider, theme} from 'antd';
import axios from "axios";
import styles from './Header.module.css';

const { Search } = Input;

async function getUser(userName) {
    const token = process.env.REACT_APP_TOKEN;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        //응답 성공
        const response = await axios.get('https://api.github.com/users/'+userName,config);
        alert(response.data.name);
        console.log(response);
    } catch (error) {
        //응답 실패
        alert(error.status);
        console.log(error);
    }
}

const onSearch = value => getUser(value);

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                <p className={styles.title}>Github User Search</p>
            </div>
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: 'black',
                },
              }}
            >
                <Search className={styles.search} placeholder="Input User ID" onSearch={onSearch} />
            </ConfigProvider>
        </header>
    );
}