import styles from './styles.module.css';
import arrow_btn_left from '@/shared/assets/icons/arrow_btn_left.svg';
import arrow_btn_right from '@/shared/assets/icons/arrow_btn_right.svg';

interface Props {
  countData: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination = ({ countData, currentPage, onChangePage }: Props) => {
  const totalPages = Math.ceil(countData / 10);

  if (totalPages <= 1) return null;

  const handleNextPage = () => onChangePage(currentPage + 1);
  const handlePreviousPage = () => onChangePage(currentPage - 1);
  const handlePageClick = (value: number) => onChangePage(value);

  const arrayListCalc = (): number[] => {
    const allPages = Array.from({ length: totalPages }, (_, index) => index + 1);

    if (totalPages <= 6) return allPages;
    if (currentPage < 4) return allPages.slice(0, 5);
    if (currentPage >= totalPages - 2) return allPages.slice(totalPages - 5, totalPages);

    return allPages.slice(currentPage - 3, currentPage + 2);
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.pageArrow} disabled={currentPage <= 1} onClick={handlePreviousPage}>
        <img className={styles.arrowImg} src={arrow_btn_left} alt="back" />
      </button>

      <div className={styles.list}>
        {totalPages > 6 && currentPage >= 4 && (
          <>
            <button
              onClick={() => handlePageClick(1)}
              className={`${styles.pageNumber} ${1 === currentPage ? styles.active : ''}`}>
              {1}
            </button>
            <p className={styles.ellipsis}>...</p>
          </>
        )}

        {arrayListCalc().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`${styles.pageNumber} ${pageNumber === currentPage ? styles.active : ''}`}
            disabled={currentPage === pageNumber}>
            {pageNumber}
          </button>
        ))}

        {totalPages > 6 && currentPage < totalPages - 2 && (
          <>
            <p className={styles.ellipsis}>...</p>
            <button
              onClick={() => handlePageClick(totalPages)}
              className={`${styles.pageNumber} ${totalPages === currentPage ? styles.active : ''}`}>
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        className={styles.pageArrow}
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}>
        <img className={styles.arrowImg} src={arrow_btn_right} alt="next" />
      </button>
    </div>
  );
};
