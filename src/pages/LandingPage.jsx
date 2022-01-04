import { PeliculasGrid } from "../components/PeliculasGrid";
import { Busqueda } from "../components/Busqueda";

export function LandingPage() {
  return (
    <div>
      <Busqueda></Busqueda>
      <PeliculasGrid />
    </div>
  );
}
