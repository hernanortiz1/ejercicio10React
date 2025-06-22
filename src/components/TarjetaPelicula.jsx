import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const TarjetaPelicula = () => {
  return (
    <section className="p-3">
      <div className="row row-cols-2 row-cols-md-3 g-4">
        <div className="col">
          <Card>
            <Card.Title className="m-2 text-start">Nombre: </Card.Title>
            <Card.Body className="fondoFormulario">
              <div className="text-start">
                <p>
                  <strong>Descripcion:</strong> This is a wider card with
                  supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <p>
                  <strong>Genero:</strong>
                </p>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="text-end ">
                <Button
                  type="submit"
                  variant="danger"
                  className="px-3 shadow-sm"
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
