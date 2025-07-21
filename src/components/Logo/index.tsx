import styles from './styles.module.css';
import { Hourglass } from 'lucide-react';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href=''>
        <Hourglass />
        <span>Chronos</span>
      </a>
    </div>
  );
}
