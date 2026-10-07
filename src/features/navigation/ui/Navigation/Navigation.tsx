import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            to="/questions">
            База вопросов
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            to="/collection">
            Собеседования
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            to="/quiz">
            Тренажер
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
