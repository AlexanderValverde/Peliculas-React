import { BiLoaderAlt } from 'react-icons/bi';
import styles from '../styles/Loader.module.css';

export function Loader() {
    return (
        <div className={styles.loader}>
            <BiLoaderAlt className={styles.loading} size={60}></BiLoaderAlt>
        </div>
    )
}
