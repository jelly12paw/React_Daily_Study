import React from 'react';
import styles from './Footer.module.css';
import {ImEarth} from 'react-icons/im';

const table = [
    {
        title : '새로운 기능',
        list1 : 'Microsoft 365',
        list2 : '게임',
        list3 : 'Surface Pro 9',
        list4 : 'Surface Laptop 5',
        list5 : 'Surface Laptop Studio',
        list6 : 'Surface Laptop Go 2',
        list7 : 'Windows 11 앱'
    },
    {
        title : 'Microsoft Store',
        list1 : '계정 프로필',
        list2 : '다운로드 센터',
        list3 : 'Microsoft Store 지원',
        list4 : '반품/환불',
        list5 : '주문 조회'
    },
    {
        title : '교육',
        list1 : 'Microsoft Education',
        list2 : '교육용 장치',
        list3 : '교육용 Microsoft Teams',
        list4 : 'Microsoft 365 Education',
        list5 : 'Office Education',
        list6 : '교육자 트레이닝 및 개발',
        list7 : '학생 및 학부모용 특가 혜택',
        list8 : 'Azure for students'
    },
    {
        title : '기업 고객',
        list1 : 'Microsoft Cloud',
        list2 : 'Microsoft Security',
        list3 : 'Azure',
        list4 : 'Dynamics 365',
        list5 : 'Microsoft 365',
        list6 : 'Microsoft Advertising',
        list7 : 'Microsoft Industry',
        list8 : 'Microsoft Teams'
    },
    {
        title : '개발자 및 IT',
        list1 : '개발자 센터',
        list2 : '설명서',
        list3 : 'Microsoft Learn',
        list4 : 'Microsoft Tech 커뮤니티',
        list5 : 'Azure Marketplace',
        list6 : 'AppSource',
        list7 : 'Microsoft Power Platform',
        list8 : 'Visual Studio'
    },
    {
        title : '회사',
        list1 : '채용 정보',
        list2 : 'Microsoft 정보',
        list3 : '회사 뉴스',
        list4 : 'Microsoft 개인 정보 보호',
        list5 : '투자자',
        list6 : '지속 가능성'
    },
]

export default function Footer() {
    return (
        <footer>
            <div className={styles.tables}>
                {table.map((lists, idx) => (
                    <div className={styles.container} key={idx}>
                        <div className={styles.title}>{lists.title}</div>
                        <div className={styles.text}>{lists.list1}</div>
                        <div className={styles.text}>{lists.list2}</div>
                        <div className={styles.text}>{lists.list3}</div>
                        <div className={styles.text}>{lists.list4}</div>
                        <div className={styles.text}>{lists.list5}</div>
                        <div className={styles.text}>{lists.list6}</div>
                        <div className={styles.text}>{lists.list7}</div>
                        <div className={styles.text}>{lists.list8}</div>
                    </div>
                ))}
            </div>
            <div className={styles.infos}>
                    <div className={styles.infotext}><ImEarth className={styles.icon}/> 한국어(대한민국)</div>
                    <div className={styles.info}>
                        <div className={styles.infotext}>Microsoft에 문의</div>
                        <div className={styles.textbold}>개인정보처리방침 및 위치정보이용약관</div>
                        <div className={styles.infotext}>사용약관</div>
                        <div className={styles.infotext}>상표</div>
                        <div className={styles.infotext}>광고 정보</div>
                        <div className={styles.infotext}>© Microsoft 2023</div>
                    </div>
            </div>
        </footer>
    );
}

