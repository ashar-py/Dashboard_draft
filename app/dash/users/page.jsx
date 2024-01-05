import styles from "@/app/ui/dash/users/users.css";
import Link from "next/link";

const Users = () => {
  return (
      <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dash/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Company Name</td>
            <td>Contact Name</td>
            <td>Contact Number</td>
            <td>Contact Email</td>
            <td>Mailing Address</td>
            <td>Billing Address</td>
            <td>Assistant ID</td>
            <td>Subscription Type</td>
            <td>Type</td>
          </tr>
        </thead>
        </table>
      </div>
  )
}

export default Users