import * as styles from "./Topbar.css";
import * as clsx from "clsx";

export const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.SideAlignedBox}>
        <div className={clsx.clsx(["material-icons gray-400", styles.iconBox])}>
          menu
        </div>
        <img
          className={styles.logoBox}
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
        />
      </div>
      <div className={styles.searchBar}>
        <span className="material-icons gray-400">search</span>
        <span>메일 검색</span>
      </div>
    </div>
  );
};
