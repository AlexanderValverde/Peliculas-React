import { PeliculasGrid } from "./components/PeliculasGrid";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div>
        <header>
            <h1 className={styles.peliTitle}>Películas</h1>
        </header>
        <main>
           <PeliculasGrid></PeliculasGrid>
        </main>
    </div>
  );
}
