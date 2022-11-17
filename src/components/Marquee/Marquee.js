import React from 'react'
import Marquee from 'react-fast-marquee'
import styles from './Marquee.module.css'
import Img1 from '../../public/assets/43.png'
import Img2 from '../../public/assets/360.png'
import Img3 from '../../public/assets/401.png'
import Img4 from '../../public/assets/608.png'
import Img5 from '../../public/assets/649.png'
import Img6 from '../../public/assets/759.png'
import Img7 from '../../public/assets/883.png'
import Img8 from '../../public/assets/884.png'

const Marquees = () => {
  return (
    <Marquee
        gradient={false}
        speed={80}
        direction="left"
        loop={0}
        className={styles.marquee}
    >
        <img src={Img1} alt="img1" />
        <img src={Img2} alt="img2" />
        <img src={Img3} alt="img3" />
        <img src={Img4} alt="img4" />
        <img src={Img5} alt="img5" />
        <img src={Img6} alt="img6" />
        <img src={Img7} alt="img7" />
        <img src={Img8} alt="img8" />
    </Marquee>
  )
}

export default Marquees