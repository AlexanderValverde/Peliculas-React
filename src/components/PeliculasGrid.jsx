import { useEffect, useState } from "react";
import { httpGET } from "../utils/httpCliente";
import { PeliculasCard } from "./PeliculasCard";
import styles from "../styles/PeliculasGrid.module.css";

export function PeliculasGrid() {
  /*let peliculasData = [];
  const peliState = useState([]);
  const peliculasData = peliState[0];
  const setPelicula = peliState[1];*/

  const [peliculasData, setPelicula] = useState([]);
  
  useEffect(() => {
    httpGET("/discover/movie").then((data) => {
        /*peliculasData = data.results; console.log(peliculasData);*/
        setPelicula(data.results);
      });
  }, []);
  return (
    <ul className={styles.peliGrid}>
      {peliculasData.map(
          (pelicula) => (
            <PeliculasCard key={pelicula.id} pelicula = {pelicula} />
        ))}
    </ul>
  );
}
