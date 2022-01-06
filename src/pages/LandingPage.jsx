import styles from "../styles/LandingPage.module.css"

export function LandingPage() {
  return (
      <div className={styles.peliculaPrincipal}>
			<div className={styles.contenedor}>
				<h3 className={styles.titulo}>Spider-Man: No Way Home</h3>
				<p className={styles.descripcion}>
        Por primera vez en la historia cinematográfica de Spider-Man, nuestro héroe, vecino y amigo es desenmascarado, y por tanto, ya no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un superhéroe. Cuando pide ayuda al Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser él.
				</p>
				<button role="button" className={styles.boton}>Reproducir</button>
				<button role="button" className={styles.boton}>Más información</button>
			</div>
		</div>
  );
}
