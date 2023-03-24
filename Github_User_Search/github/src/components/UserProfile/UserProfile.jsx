import React from 'react';
import styles from './UserProfile.module.css'
import {RiGitRepositoryLine} from 'react-icons/ri';
import {SlUserFollowing, SlUserFollow} from 'react-icons/sl';

export default function UserProfile({user}) {
    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <img src={user.avatar_url} alt="" />
                <a href={user.html_url}>{user.name}</a>
            </div>
            <div className={styles.info}>
                <button className={styles.btn}><SlUserFollow className={styles.icon}/>{user.followers}</button>
                <button className={styles.btn}><SlUserFollowing className={styles.icon}/>{user.following}</button>
                <button className={styles.btn}><RiGitRepositoryLine className={styles.icon}/>{user.public_repos}</button>
            </div>
        </div>
    );
}