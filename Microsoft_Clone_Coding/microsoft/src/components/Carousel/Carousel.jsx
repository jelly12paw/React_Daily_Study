import React, {useState, useEffect, useRef} from 'react';
import styles from './Carousel.module.css';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';

const items = [
    {
        img : 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP4-1399x600',
        title : 'Microsoft 365',
        text : '더 빨리, 더 많이 해내는 데 필요한 모든 것',
        btn : '1인용',
        detail : '최대 6인용'
    },
    {
        img : 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-Type-Cover-Sapphire-Forest:VP4-1399x600',
        title : '최대 25% 할인혜택',
        text : 'Surface, Xbox 및 Microsoft 365를 포함한 다양한 제품을 특가에 만나보세요.',
        btn : '지금 쇼핑하기'
    }
]

const TOTAL_SLIDES = 1;

export default function Carousel() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
  
    // Next 버튼 클릭 시
    const NextSlide = () => {
      if (currentSlide >= TOTAL_SLIDES) {
        // 더 이상 넘어갈 슬라이드가 없으면
        setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
        // return;  // 클릭이 작동하지 않습니다.
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    };
    // Prev 버튼 클릭 시
    const PrevSlide = () => {
      if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
        // return;  // 클릭이 작동하지 않습니다.
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    };
  
    useEffect(() => {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    }, [currentSlide]);

    return (
        <>    
            <div className={styles.carousel}>
                {items.map((item, idx) => (
                    <div className={styles.item} key={idx} ref={slideRef}>
                        <img src={item.img} alt="" />
                        <div className={styles.iteminfo}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.text}>{item.text}</div>
                            <div className={styles.btns}>
                                <button className={styles.btn}>{item.btn}</button>
                                {item.detail ? <button className={styles.detail}>{item.detail}<AiOutlineRight className={styles.detailicon}/></button> : ''}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                    <button className={styles.prev_btn} onClick={PrevSlide}><AiOutlineLeft/></button>
                    <button className={styles.next_btn} onClick={NextSlide}><AiOutlineRight/></button>
            </div>
        </>
    );
}

