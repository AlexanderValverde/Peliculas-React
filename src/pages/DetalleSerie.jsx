import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import styles from "../styles/DetallePelicula.module.css";
import { httpGET } from "../utils/httpCliente";

export function DetalleSerie() {
  const { serieID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [seriesData, setSeries] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    httpGET("/tv/" + serieID).then((data) => {
      setSeries(data);
      setIsLoading(false);
    });
  }, [serieID]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  const imageURL =
    "https://image.tmdb.org/t/p/w400" + seriesData.poster_path;

  return (
    <div className={styles.detalleContainer}>
      <img
        className={`${styles.col} ${styles.peliIMG}`}
        src={imageURL}
        alt={seriesData.title}
      />
      <div className={`${styles.col} ${styles.peliDetalle}`}>
        <p className={styles.titleDetalle}>
          <strong>Title:</strong> {seriesData.original_name}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {seriesData.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className={styles.overviewDetalle}>
          <strong>Synopsis:</strong> {seriesData.overview}
        </p>
        <p className={styles.overviewDetalle}>
          <strong>Temporadas:</strong> {seriesData.number_of_seasons}
        </p>
      </div>
    </div>
  );
}