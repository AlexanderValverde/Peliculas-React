import { PeliculasGrid } from "../components/PeliculasGrid";
import { Busqueda } from "../components/Busqueda";

export function PagePelicula() {
    return (
        <div>
            <Busqueda />
            <PeliculasGrid />
        </div>
    )
}
