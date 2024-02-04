import { clsx } from "clsx";
import * as styles from "./Sidebar.css";
import { menu } from "./menu";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <button className={styles.button}>
          <span className={clsx("material-icons", styles.icon)}>edit</span>
          <span>편지쓰기</span>
        </button>

        <div className={styles.menuGroup}>
          {menu.map((item, index) => (
            <button key={index} className={styles.menuItem}>
              <span className={clsx(`material-icons`, styles.menuIcon)}>
                {item.icon}
              </span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
