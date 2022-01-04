import styles from "../styles/PeliculasCard.module.css";
import { Link } from "react-router-dom";

export function PeliculasCard({pelicula}){
    const imageURL = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;

    return (
        <li className={styles.peliCard}>
            <Link to={"/peliculas/" + pelicula.id}>
                <img className={styles.peliIMG} src={imageURL} alt={pelicula.title} width= {230} height={345} />
                <div>{pelicula.title}</div>
            </Link>
        </li>
    );
}