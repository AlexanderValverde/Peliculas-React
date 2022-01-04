import peliculasData from "../data/peliculasData.json";
import { PeliculasCard } from "./PeliculasCard";
import styles from "../styles/PeliculasGrid.module.css";

export function PeliculasGrid() {
  return (
    <ul className={styles.peliGrid}>
      {peliculasData.map(
          (pelicula) => (
            <PeliculasCard key={pelicula.id} pelicula = {pelicula} />
        ))}
    </ul>
  );
}
