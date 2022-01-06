import styles from "../styles/PeliculasCard.module.css";
import { Link } from "react-router-dom";

export function SeriesCard({serie}){
    const imageURL = "https://image.tmdb.org/t/p/w300" + serie.poster_path;

    return (
        <li className={styles.peliCard}>
            <Link to={"/series/" + serie.id}>
                <img className={styles.peliIMG} src={imageURL} alt={serie.title} width= {230} height={345} />
                <div>{serie.title}</div>
            </Link>
        </li>
    );
}