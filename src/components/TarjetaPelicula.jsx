import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const TarjetaPelicula = ({datosProps, borrarDatosProps}) => {
   const confirmarBorrado = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `La cita de ${datosProps.nombreMascota} y ${datosProps.nombreDuenio} se eliminará`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarDatosProps(datosProps);

        Swal.fire({
          title: "Eliminado",
          text: `La cita de ${datosProps.nombreMascota} y ${datosProps.nombreDuenio} fue borrada correctamente`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };
  
  return (
     <section className="p-3">
      <div className="">
        <div className="col">
          <Card>
            <Card.Title className="m-2 text-start">
              <h4>Pelicula: {datosProps.nombrePelicula}</h4>
            </Card.Title>
            <Card.Body className="fondoFormulario text-start">
              <div>
                <div className="d-md-flex  align-items-center mb-2 text-center text-md-start">
                  <strong className="me-2">Género</strong>
                  <div className="bg-secondary-subtle py-1 w-100 rounded text-center">
                    {datosProps.genero}
                  </div>
                </div>
                <div className="d-md-flex align-items-center mb-2 text-center text-md-start">
                  <strong className="me-2">Descripción:</strong>
                  <div className="bg-secondary-subtle py-1 w-100 rounded text-center">
                   {datosProps.descripcion}
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="text-end ">
                <Button
                  type="submit"
                  variant="danger"
                  className="px-3 shadow-sm"
                   onClick={confirmarBorrado}
                >
                  Borrar
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TarjetaPelicula;
