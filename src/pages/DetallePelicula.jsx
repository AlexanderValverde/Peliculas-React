import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/DetallePelicula.module.css";
import { httpGET } from "../utils/httpCliente";

export function DetallePelicula() {
  const { peliculaID } = useParams();
  const [peliculasData, setPelicula] = useState(null);

  useEffect(() => {
    httpGET("/movie/" + peliculaID).then(data => {
        setPelicula(data);
    });
  }, [peliculaID]);

  if (!peliculasData) {
      return null;
  }

  const imageURL = "https://image.tmdb.org/t/p/w400" + peliculasData.poster_path;

  return (
    <div className={styles.detalleContainer}>
      <img
        className={`${styles.col} ${styles.peliIMG}`}
        src={imageURL}
        alt={peliculasData.title}
      />
      <div className={`${styles.col} ${styles.peliDetalle}`}>
        <p className={styles.titleDetalle}>
          <strong>Title:</strong> {peliculasData.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {peliculasData.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className={styles.overviewDetalle}>
          <strong>Synopsis:</strong> {peliculasData.overview}
        </p>
      </div>
    </div>
  );
}
