import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

import styles from './styles.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
