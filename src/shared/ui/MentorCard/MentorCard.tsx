import styles from './styles.module.css';
import ava_ruslan from '@/shared/assets/images/ava_ruslan.png';
import telegram_icon_blue from '@/shared/assets/socials/telegram_icon_blue.svg';
import youtube_icon_blue from '@/shared/assets/socials/youtube_icon_blue.svg';
import profile_icon_blue from '@/shared/assets/socials/profile_icon_blue.svg';

export const MentorCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={ava_ruslan} alt="фото ментора" />
        <div>
          <p className={styles.name}> Руслан Куянец</p>
          <p className={styles.position}>Гуру во всем</p>
        </div>
      </div>
      <div className={styles.description}>
        Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
      </div>
      <div className={styles.socialLinks}>
        <a href="https://t.me/ruslan_kuyanets">
          <img src={telegram_icon_blue} alt="иконка телеграм" />
        </a>
        <a href="https://www.youtube.com/@reactify-it">
          <img src={youtube_icon_blue} alt="иконка ютуб" />
        </a>
        <a href="https://app.yeahub.ru/users/0a1438a3-1776-43b4-9a95-e60ee6573903">
          <img src={profile_icon_blue} alt="иконка профиля" />
        </a>
      </div>
    </div>
  );
};
