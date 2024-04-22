import styles from "../styles/Navbar.module.css"

const Landing = () => {
    return (
      <div className={styles.container}>
          <div className={styles.nav}>
              <div className={styles.first}>Logo</div>
          </div>
          <div className={styles.second}>
              <p>Home</p>
              <p>Packages</p>
              <p>Book Online</p>
              <p>Contact us</p>
          </div>
          <div className={styles.logIn}>Log In</div>
      </div>
    )
  }
  
  export default Landing