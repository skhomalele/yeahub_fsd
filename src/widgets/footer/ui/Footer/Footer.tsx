import figma_icon from '@/shared/assets/socials/figma_icon.svg';
import github_icon from '@/shared/assets/socials/github_icon.svg';
import telegram_icon from '@/shared/assets/socials/telegram_icon.svg';
import youtube_icon from '@/shared/assets/socials/youtube_icon.svg';
import tiktok_icon from '@/shared/assets/socials/tiktok_icon.svg';
import yeahub_icon from '@/shared/assets/brand/yeahub_icon.svg';

import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={yeahub_icon} alt="yeahub_icon" className={styles.yeahubIcon} />
          <div className={styles.description}>
            <p className={styles.slogan}>Выбери, каким будет IT завтра, вместе с нами</p>
            <p className={styles.descriptionText}>
              YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
              исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
              ознакомления в Figma.
            </p>
          </div>
          <div className={styles.info}>
            <div className={styles.left}>
              <p className={styles.copyright}>© 2024 YeaHub</p>
              <a className={styles.link} href="https://yeatwork.ru/ru/docs">
                Документы
              </a>
            </div>
            <p className={styles.socialText}>Ищите нас и в других соцсетях @yeahub_it</p>
            <div className={styles.socialIcons}>
              <a
                className={styles.linkIcon}
                href="https://www.figma.com/community/file/1438482355619792777/yeahub-public"
                target="_blank">
                <img className={styles.icon} src={figma_icon} alt="figma_icon" />
              </a>
              <a
                className={styles.linkIcon}
                href="https://github.com/YeaHubTeam/yeahub-platform"
                target="_blank">
                <img className={styles.icon} src={github_icon} alt="github_icon" />
              </a>
              <a className={styles.linkIcon} href="https://www.youtube.com/@yeahub" target="_blank">
                <img className={styles.icon} src={youtube_icon} alt="youtube_icon" />
              </a>
              <a
                className={styles.linkIcon}
                href="https://www.tiktok.com/@yeahub%5C_it"
                target="_blank">
                <img className={styles.icon} src={tiktok_icon} alt="tiktok_icon" />
              </a>
              <a className={styles.linkIcon} href="https://t.me/yeahub" target="_blank">
                <img className={styles.icon} src={telegram_icon} alt="telegram_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
