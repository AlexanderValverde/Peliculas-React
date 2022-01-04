import styles from "../styles/PeliculasCard.module.css";

export function PeliculasCard({pelicula}){
    const imageURL = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
    return (
        <li className={styles.peliCard}>
            <img className={styles.peliIMG} src={imageURL} alt={pelicula.title} width= {230} height={345} />
            <div>{pelicula.title}</div>
        </li>
    );
}