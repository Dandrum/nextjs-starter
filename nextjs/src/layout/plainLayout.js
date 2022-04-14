import styles from '@layout/PlainLayout.module.scss';

const PlainLayout = ({ children }) => (
  <div className={styles.plainLayout}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default PlainLayout;
