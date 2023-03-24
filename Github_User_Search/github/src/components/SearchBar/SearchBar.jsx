import React, { useState } from 'react';
import {Input, ConfigProvider, theme} from 'antd';
import axios from "axios";
import UserProfile from '../UserProfile/UserProfile';
import styles from './SearchBar.module.css'

export default function SearchBar() {

    const { Search } = Input;
    const [data, setData] = useState(null);

    async function getUser(userName) {
        const token = process.env.REACT_APP_TOKEN;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            //응답 성공
            const response = await axios.get('https://api.github.com/users/'+userName, config);
            setData(response.data);
            console.log(response);
        } catch (error) {
            //응답 실패
            alert(error.status);
            setData('');
            console.log(error);
        }
    }

    const onSearch = value => getUser(value);

    return (
        <div className={styles.container}>
            <ConfigProvider
                  theme={{
                    algorithm: theme.darkAlgorithm,
                    token: {
                        colorPrimary: 'black',
                    },
                  }}
            >
              <Search placeholder="Input User ID" onSearch={onSearch} />
            </ConfigProvider>
            {data ? <UserProfile className={styles.card} user={data}/> : ''}
        </div>
    );
}