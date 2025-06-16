import TarjetaPelicula from "./TarjetaPelicula";

const ListaPeliculas = () => {
    return (
         <div>
      <div className="text-center bg-white rounded-3">
        <h2>Lista de peliculas</h2>
        <div className="border border-1 border-dark-subtle rounded-3">
          <TarjetaPelicula/>
        </div>
      </div>
    </div>
    );
};

export default ListaPeliculas;