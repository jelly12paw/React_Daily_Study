import React, {useState, useEffect} from 'react';
import styles from './TopBtn.module.css'
import {AiOutlineArrowUp} from 'react-icons/ai';


export default function TopBtn() {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 300 && window.scrollY < 2800) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton && (
        <div className={styles.container}>
            <button onClick={scrollToTop}><AiOutlineArrowUp/>맨 위로 이동</button>
        </div>
    );
}

