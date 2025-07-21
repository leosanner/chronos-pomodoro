import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, Settings2Icon, SunIcon } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href=''>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href=''>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href=''>
        <Settings2Icon />
      </a>
      <a className={styles.menuLink} href=''>
        <SunIcon />
      </a>
    </nav>
  );
}
