import styles from './styles.module.css';
import searchIcon from '../../assets/icons/search_Icon.svg';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchInput = ({ search, setSearch }: Props) => {
  return (
    <div className={styles.searchWrapper}>
      <img src={searchIcon} alt="search_icon" className={styles.icon} />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Введите запрос..."
      />
    </div>
  );
};
