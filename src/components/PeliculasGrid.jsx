import { useEffect, useState } from "react";
import { httpGET } from "../utils/httpCliente";
import { PeliculasCard } from "./PeliculasCard";
import { Loader } from "../components/Loader";
import { useQuery } from "../hooks/useQuery";
import styles from "../styles/PeliculasGrid.module.css";

export function PeliculasGrid() {
  //destructuración para optimizar el useState con dos parámetros tipo array
  /*let peliculasData = [];
  const peliState = useState([]);
  const peliculasData = peliState[0];
  const setPelicula = peliState[1];*/

  const [peliculasData, setPelicula] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    httpGET(searchUrl).then((data) => {
      /*peliculasData = data.results; console.log(peliculasData);*/
      //enviando el resultado que contiene data utilizando useEffect
      setPelicula(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <ul className={styles.peliGrid}>
      {peliculasData.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
}
