import TarjetaPelicula from "./TarjetaPelicula";

const ListaPeliculas = ({ datosProps, borrarDatosProps }) => {
  return (
    <div>
      <div className="text-center bg-white rounded-3">
        <h2>Lista de peliculas</h2>
        <div className="row row-cols-2 row-cols-md-3">
          {datosProps.map((item, indice) => (
            <TarjetaPelicula
              key={indice}
              datosProps={item}
              borrarDatosProps={borrarDatosProps}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaPeliculas;
