import React from 'react'
import Image from 'next/image'
import IMG1 from '../images/image6.png'
import IMG2 from '../images/image7.png'
import IMG3 from '../images/image8.png'

function Carousel(){
    return(
        <div className="Carousel">
            <div className="container">
                <div class="marquee">
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