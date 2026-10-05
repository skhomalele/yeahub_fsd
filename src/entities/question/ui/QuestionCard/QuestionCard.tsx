import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

import accordeon from '@/shared/assets/icons/accordeon.svg';
import type { Question } from '../../model/types';
import { AnswerQuestion } from '../AnswerQuestion/AnswerQuestion';
import { QuestionStats } from '../QuestionStats/QuestionStats';

interface Props {
  question: Question;
}

export const QuestionCard = ({ question }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false);
      }
    };

    if (isOpenMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpenMenu]);

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenMenu((prev) => !prev);
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/questions/${question.slug}`);
  };

  return (
    <article className={styles.card}>
      <div className={styles.accordeon} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={styles.title}>{question?.title}</h3>
        <img
          alt="arrow"
          src={accordeon}
          className={`${styles.accordeonIcon} ${isOpen ? styles.rotated : ''}`}
        />
      </div>

      <div ref={contentRef} className={styles.cardContent} style={{ maxHeight: `${height}px` }}>
        <div className={styles.bodyInner}>
          <div className={styles.metaRow}>
            <div className={styles.meta}>
              <QuestionStats stats={question?.rate} title="Рейтинг" />
              <QuestionStats stats={question?.complexity} title="Сложность" />
            </div>

            <div className={styles.optionsWrapper} ref={menuRef}>
              <button className={styles.optionsButton} onClick={handleMenuToggle}>
                &#8942;
              </button>

              {isOpenMenu && (
                <div className={styles.dropdown}>
                  <button className={styles.dropdownBtn} onClick={handleReadMore}>
                    Подробнее
                  </button>
                </div>
              )}
            </div>
          </div>

          <AnswerQuestion answer={question?.shortAnswer} withCard={false} />
        </div>
      </div>
    </article>
  );
};
