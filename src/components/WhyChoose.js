import React from 'react'
import Carousel from './Carousel'
import SVG1 from "../app/images/Vector1.svg"    
import SVG2 from "../app/images/Vector2.svg"
import SVG3 from "../app/images/Vector3.svg"
import SVG4 from "../app/images/Vector4.svg"
import Description from './Description'
import styles from "../styles/WhyChoose.module.css"
//  flex-col sm:flex-row
function WhyChoose(){
    return(
        <div className={styles.WhyChoose}>
            <Carousel />
            <div className= {styles.WhyChooseContent}>
                <h1 className={styles.head}>Why Choose Us?</h1> {/*FONT FAMILY HAS TO BE STORYBOOK*/}
                <Description
                    route={SVG1}
                    head="By Students, For Students"
                    text={<p> We get it, because we are it! <br />{/*FONT FAMILY HAS TO BE STORYBOOK*/}
                    Our team is composed of fellow college students who understand your unique
                    travel needs, budget constraints, and desire for thrilling experiences. </p>}
                />
                <Description className="award"
                    route={SVG2}
                    head="Award- Winning Services"
                    text={<p>Travel worry-free knowing that we’re here for {/*FONT FAMILY HAS TO BE STORYBOOK*/}
                         you 24 hours a day if you need us</p>}
                />
                <Description
                    route={SVG3}
                    width={95}
                    head="Budget-Friendly Optionss"
                    text={<p>College life can be expensive, but that doesn't mean you {/*FONT FAMILY HAS TO BE STORYBOOK*/}
                         have to miss out on exciting adventures. We offer a range of
                         budget-friendly packages and special deals to ensure you get
                         the most out of your travels without breaking the bank.</p>}
                />
            </div>
        </div>
    )
}

export default WhyChoose;
