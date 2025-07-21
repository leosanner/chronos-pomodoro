import { useState } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, Settings2Icon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme == 'dark' ? 'light' : 'dark'));
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ir para a histórico'
        title='Ir para a histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ir para a configurações'
        title='Ir para a configurações'
      >
        <Settings2Icon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
