import {DetallePelicula} from "./pages/DetallePelicula";
import {LandingPage} from "./pages/LandingPage";
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
        <header>
            <Link to="/"><h1 className={styles.peliTitle}>Películas & Series</h1></Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/peliculas/:peliculaID"><DetallePelicula></DetallePelicula></Route>
            <Route path="/"><LandingPage></LandingPage></Route>
          </Switch>
        </main>
    </Router>
  );
}
