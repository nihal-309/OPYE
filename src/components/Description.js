import React from 'react'
import Image from 'next/image'
import styles from "../styles/Description.module.css"

function Description(props){
    return(
        <div className={styles.Description}>
            <Image src={props.route} width={props.width}/>
            <div className={styles.DescriptionText}>
                <h2>{props.head}</h2> {/*FONT FAMILY HAS TO BE GILROY*/}
                <h6>{props.text}</h6>{/*FONT FAMILY HAS TO BE GILROY*/}
            </div>
        </div>
    )
}

export default Description;
// SVG1
// By Students, For Students

// We get it, because we are it! <br />
// Our team is composed of fellow college students who understand your unique
// travel needs, budget constraints, and desire for thrilling experiences.

