import Sidebar from "../ui/dash/sidebar/sidebar"
import Navbar from "../ui/dash/navbar/navbar"
import styles from "../ui/dash/dashboard.css"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default Layout