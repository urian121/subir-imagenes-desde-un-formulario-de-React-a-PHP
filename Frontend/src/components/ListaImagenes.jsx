import { useState, useEffect } from "react";
import axios from "axios";

function ListaImagenes() {
  const [imagenes, setImagenes] = useState([]);

  const rutaRelativa =
    "http://localhost/como-subir-imagenes-desde-un-formulario-con-react/Backend-php/imgs/";
  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const URL_API =
          "http://localhost/como-subir-imagenes-desde-un-formulario-con-react/Backend-php/";
        const response = await axios.get(URL_API);
        setImagenes(response.data);
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
      }
    };

    obtenerImagenes();
  }, []);

  if (imagenes.length === 0) {
    return <p>No hay imágenes disponibles.</p>;
  }

  return (
    <div>
      <h2>Lista de Imágenes</h2>
      <ul>
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <img
              src={rutaRelativa + imagen}
              alt="Imagen"
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ListaImagenes;
