import styles from '../styles/Landing1.module.css'
import img from '../app/images/backgorund.png'
import Navbar from './Navbar'
import Image from 'next/image'
import IMG1 from '../app/images/backgorund.png'
const Landing = () => {
  return (
    <div className={styles.contt}>
        <Image src={IMG1} alt='okok' className={styles.img}/>
        <Navbar />
    </div>
  )
}

export default Landing