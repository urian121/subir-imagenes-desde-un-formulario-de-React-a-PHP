import { useState } from "react";
import axios from "axios";
import ListaImagenes from "./ListaImagenes";

const SubirImagen = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubirImagen = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const URL_API =
      "http://localhost/como-subir-imagenes-desde-un-formulario-con-react/Backend-php/";
    const formData = new FormData();
    formData.append("avatar", selectedFile);

    try {
      const response = await axios.post(URL_API, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data); // Maneja la respuesta del servidor
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        console.log("Error en la respuesta del servidor:", error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.log("No se recibió respuesta del servidor:", error.request);
      } else {
        // Ocurrió un error durante la configuración de la solicitud
        console.log("Error al configurar la solicitud:", error.message);
      }
    }
  };

  return (
    <div>
      <h3>Subir Imagen</h3>
      <input type="file" name="avatar" onChange={handleSubirImagen} />
      <br />

      {selectedFile ? (
        <img
          alt="Preview"
          height="60"
          src={URL.createObjectURL(selectedFile)}
        />
      ) : null}
      <br />
      <hr />
      <button onClick={handleUpload}>Subir</button>
      <ListaImagenes />
    </div>
  );
};

export default SubirImagen;
