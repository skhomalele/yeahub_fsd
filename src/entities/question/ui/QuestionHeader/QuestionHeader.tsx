import styles from './styles.module.css';
import product_image from '@/shared/assets/images/product_image.png';
import meta_button from '@/shared/assets/icons/meta_button.svg';

interface Props {
  title: string;
  description: string;
  imageSrc?: string | null;
  onOpenMeta?: () => void;
}

export const QuestionHeader = ({ title, description, imageSrc, onOpenMeta }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.img}
          src={imageSrc || product_image}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = product_image;
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{title}</h1>
          {onOpenMeta && (
            <button className={styles.mobileMetaButton} onClick={onOpenMeta}>
              <img src={meta_button} alt="Меню" />
            </button>
          )}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
