import { useEffect, useState } from "react";
import { httpGET } from "../utils/httpCliente"
import { Loader } from "../components/Loader";
import { useQuery } from "../hooks/useQuery";
import styles from "../styles/PeliculasGrid.module.css";
import { SeriesCard } from "./SeriesCard";

export function SeriesGrid() {

  const [seriesData, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/tv?query=" + search
      : "/discover/tv";
    httpGET(searchUrl).then((data) => {
      setSeries(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <ul className={styles.peliGrid}>
        {seriesData.map((serie) => (
          <SeriesCard key={serie.id} serie={serie} />
        ))}
      </ul>
    </div>
  );
}
