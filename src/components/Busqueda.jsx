import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/Busqueda.module.css";

export function Busqueda() {
    const query = useQuery();
    const search = query.get("search");
    const [busquedaTexto, setbusquedaTexto] = useState("");
    const history = useHistory();

    useEffect(() => {
        setbusquedaTexto(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("?search=" + busquedaTexto);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input  type="text"
                        className={styles.searchInput} 
                        name="buscar" 
                        placeholder="Type..."
                        value={busquedaTexto} 
                        onChange={(e) => setbusquedaTexto(e.target.value)}
                        autoComplete="off" />
                <button className={styles.searchButton} 
                        type="submit"><FaSearch size={20} /></button>
            </div>
        </form>
    );
}