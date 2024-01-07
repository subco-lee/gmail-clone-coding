import * as styles from "./Topbar.css";

export const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <span className="material-icons gray-400">menu</span>
      </div>
      <img
        className={styles.logoBox}
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
      />

      <div className={styles.searchBar}>
        <span className="material-icons gray-400">search</span>
        <span>메일 검색</span>
      </div>
    </div>
  );
};
