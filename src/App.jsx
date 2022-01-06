import { DetallePelicula } from "./pages/DetallePelicula";
import { LandingPage } from "./pages/LandingPage";
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PagePelicula } from "./pages/PagePelicula";
import { PageSerie } from "./pages/PageSerie";
import { DetalleSerie } from "./pages/DetalleSerie";

export default function App() {
  return (
    <Router>
      <header className={styles.header}>
        <nav className={styles.encabezado}>
          <Link to="/">
            <a href="/">Home</a>
          </Link>
          <Link to="/peliculas">
            <a href="/peliculas">Movies</a>
          </Link>
          <Link to="/series">
            <a href="/series">Series</a>
          </Link>
          {/*<div className={`${styles.animation} ${styles.starthome}`}></div>*/}
        </nav>
        <Link to="/">
          <h1 className={styles.peliTitle}>Películas & Series</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/peliculas/:peliculaID">
            <DetallePelicula></DetallePelicula>
          </Route>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/peliculas">
            <PagePelicula></PagePelicula>
          </Route>
          <Route exact path="/series">
            <PageSerie></PageSerie>
          </Route>

          <Route exact path="/peliculas/:peliculaID">
            <DetallePelicula></DetallePelicula>
          </Route>
          <Route exact path="/series/:serieID">
            <DetalleSerie></DetalleSerie>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
