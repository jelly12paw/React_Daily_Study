import React, { useState } from 'react';
import styles from './Navbar.module.css';
import {CgProfile} from 'react-icons/cg';
import {BiSearch} from 'react-icons/bi';
import {BsCart3} from 'react-icons/bs';
import {AiOutlineDown, AiOutlineRight} from 'react-icons/ai';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(show => !show);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <div className={styles.logo}><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="" /></div>
                    <li>Microsoft 365</li>
                    <li>Teams</li>
                    <li>Windows</li>
                    <li>Surface</li>
                    <li>Xbox</li>
                    <li>세일</li>
                    <li>지원</li>
                </ul>
                <ul>
                    <li className={show ? styles[`showmenu`] : styles[``]} onClick={() => toggleMenu()}>Microsoft 전체 <AiOutlineDown/></li>
                    <li className={styles.menu_icon}><BiSearch/><span className={styles.tooltip}>Microsoft.com 검색</span></li>
                    <li className={styles.menu_icon}><BsCart3/><span className={styles.tooltip}>0 개의 쇼핑 카트 항목</span></li>
                    <li className={styles.menu_icon}><CgProfile/><span className={styles.tooltip}>귀하 계정에 로그인</span></li>
                </ul>
            </nav>
            <div className={show ? styles[`active`] : styles[`deactive`]}>
                <div className={styles.options}>
                    <div className={styles.menus}>
                        <div>
                            <h3 className={styles.title}>소프트웨어</h3>
                            <p>Windows 앱</p>
                            <p>AI</p>
                            <p>OneDrive</p>
                            <p>Outlook</p>
                            <p>Skype</p>
                            <p>OneNote</p>
                            <p>Microsoft Teams</p>
                        </div>
                        <div>
                            <h3 className={styles.title}>PC 및 장치</h3>
                            <p>Xbox 쇼핑</p>
                            <p>주변 기기</p>
                        </div>
                        <div>
                            <h3 className={styles.title}>엔터테인먼트</h3>
                            <p>Xbox Game Pass Ultimate</p>
                            <p>Xbox Live Gold</p>
                            <p>Xbox 및 게임</p>
                            <p>PC 게임</p>
                            <p>Windows 게임</p>
                        </div>
                        <div>
                            <h3 className={styles.title}>기업 고객용</h3>
                            <p>Microsoft Cloud</p>
                            <p>Microsoft Security</p>
                            <p>Azure</p>
                            <p>Dynamics 365</p>
                            <p>비즈니스용 Microsoft 365</p>
                            <p>Microsoft Industry</p>
                            <p>Microsoft Power Platform</p>
                            <p>Windows 365</p>
                        </div>
                        <div>
                            <h3 className={styles.title}>개발자 및 IT</h3>
                            <p>개발자 센터</p>
                            <p>설명서</p>
                            <p>Microsoft Learn</p>
                            <p>Microsoft Tech 커뮤니티</p>
                            <p>Azure Marketplace</p>
                            <p>AppSource</p>
                            <p>Visual Studio</p>
                        </div>
                        <div>
                            <h3 className={styles.title}>기타</h3>
                            <p>무료 다운로드 및 보안</p>
                            <p>교육</p>
                            <p>볼륨 라이선싱</p>
                        </div>
                    </div>
                    <div className={styles.sitemap}>
                        <h4>사이트맵 보기 <AiOutlineRight/></h4>
                    </div>
                </div>
            </div>
        </>
    );
}

