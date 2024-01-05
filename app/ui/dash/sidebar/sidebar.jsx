import Image from "next/image";
import styles from "./sidebar.css";
import MenuLink from "./MenuLink/MenuLink";

const menuItems = [
{
  title: "Pages",
  list: [
  {
    title: "Dashboard",
    path: "/dash",
  },
  {
    title: "Clients",
    path: "/dash/users",
  },
  {
    title: "abc",
    path: "",
  },
  {
    title: "xyz",
    path: "",
  },
  ],
},
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.user}>
    <Image
    className={styles.userImage}
    src="/noavatar.png"
    alt=""
    width="50"
    height="50"
    />
    <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
        </div>
      <ul className={styles.list}>
      {menuItems.map((cat)=>(
        <li key={cat.title}>
        <span className={styles.cat}>{cat.title}</span>
        {cat.list.map((item) => (
          <MenuLink item={item} key={item.title} />
          ))}
        </li>
        ))}
      </ul>
      <form>
      <button className={styles.logout}>
      Logout
      </button>
      </form>
    </div>
  );
};

export default Sidebar;