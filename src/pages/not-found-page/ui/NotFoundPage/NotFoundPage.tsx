import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <button className={styles.button} onClick={goBack}>
        Вернуться назад
      </button>
    </div>
  );
};
