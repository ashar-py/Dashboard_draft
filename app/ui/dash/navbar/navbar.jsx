"use client"
import styles from './navbar.css';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <input type="text" placeholder="Search" className={styles.input}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar