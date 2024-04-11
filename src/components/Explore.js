import IMG1 from '../app/images/img1.png'
import IMG2 from '../app/images/img2.png'
import Image from 'next/image'
import styles from "../styles/Explore.module.css"
import {Outfit} from 'next/font/google'

const outfit = Outfit({
    weight: '700',
    subsets: ['latin'],
  })

function Explore(props){
    return(
        <div className={styles.Explore}>
            <div className={styles.images}>
                <Image className={styles.img1} src={IMG1} alt="" />
                <Image className={styles.img2} src={IMG2} alt="" />
            </div>
            <div className={styles.head}>
                <h1>{props.head}</h1>
            </div>
            <div className={styles.body}>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default Explore;