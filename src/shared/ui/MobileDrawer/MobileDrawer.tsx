import { useEffect } from 'react';
import styles from './styles.module.css';
import close_icon from '@/shared/assets/icons/close_filter_button.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const MobileDrawer = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
        onClick={onClose}
      />

      <div className={`${styles.panel} ${isOpen ? styles.panelActive : ''}`}>
        <div className={styles.closeButtonWrapper}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={close_icon} alt="Закрыть" />
          </button>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
