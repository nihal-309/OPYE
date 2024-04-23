import styles from "../styles/Navbar.module.css"

const Landing = () => {
    return (
      <div className={styles.container}>
          <div className={styles.nav}>
              <div className={styles.first}>Logo</div>
          </div>
          <div className={styles.second}>
              <a href="./">Home</a>
              <a href="./">Packages</a>
              <a href="./">Book Online</a>
              <a href="./">Contact us</a>
          </div>
          <div className={styles.logIn}>Log In</div>
      </div>
    )
  }
  
  export default Landing