import React from 'react'
import Image from 'next/image'
import IMG1 from '../app/images/image6.png'
import IMG2 from '../app/images/image7.png'
import IMG3 from '../app/images/image8.png'
import styles from "../styles/Carousel.module.css"

function Carousel(){
    return(
        <div className={styles.Carousel}>
            <div className={styles.container}>
                <div className={styles.marquee}>
                    <Image src={IMG1} id="image1" width="423" height="274" />
                    <Image src={IMG2} id="image2" width="423" height="274" />
                    <Image src={IMG3} id="image3" width="423" height="274" />
                    <Image src={IMG1} id="image1" width="423" height="274" />
                    <Image src={IMG2} id="image2" width="423" height="274" />
                    <Image src={IMG3} id="image3" width="423" height="274" />
                </div>
            </div>
        </div>
    )
}

export default Carousel;