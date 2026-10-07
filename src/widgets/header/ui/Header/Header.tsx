import { Link } from 'react-router-dom';

import logo from '@/shared/assets/brand/logo.svg';
import yeahub from '@/shared/assets/brand/yeahub.svg';
import accodeon_alt from '@/shared/assets/icons/accordeon_alt.svg';
import hamburger_menu from '@/shared/assets/icons/hamburger_menu.svg';

import { Dropdown } from '@/shared/ui';
import { Navigation } from '@/features/navigation';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Link className={styles.logo} to="/">
              <img src={logo} alt="logo_yeahub" />
              <img className={styles.yeahubLogo} src={yeahub} alt="logo_yeahub" />
            </Link>
            <div className={styles.desktopNav}>
              <Navigation />
            </div>
            <div className={styles.mobileNav}>
              <Dropdown position="left" title="Меню" img={accodeon_alt} transform={true}>
                <Navigation />
              </Dropdown>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.desktopNav}>
              <div className={styles.loginWrapper}>
                <button className={styles.buttonLogin}>Войти</button>
                <button className={styles.buttonRegister}>Регистрация</button>
              </div>
            </div>
            <div className={styles.mobileNav}>
              <Dropdown img={hamburger_menu} transform={false} position="right">
                <div className={styles.loginWrapper}>
                  <button className={styles.buttonLogin}>Войти</button>
                  <button className={styles.buttonRegister}>Регистрация</button>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
