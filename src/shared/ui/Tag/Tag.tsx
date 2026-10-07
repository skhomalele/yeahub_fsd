import styles from './styles.module.css';

interface TagProps {
  title: string;
  isPurple?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  hint?: string;
  onClick?: () => void;
}

export const Tag = ({ title, isPurple, isActive, disabled, hint, onClick }: TagProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={hint}
      className={`${styles.tag} ${isPurple ? styles.purple : ''} ${isActive ? styles.active : ''}`}>
      {title}
    </button>
  );
};
