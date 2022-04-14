import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => (
  <div className={styles.mainLayout}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default MainLayout;
