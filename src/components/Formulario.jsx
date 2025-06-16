import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const Formulario = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <section className="p-3 border rounded-3 fondoFormulario">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="nombreMascota">
              <Form.Label>Nombre de pelicula *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese nombre de pelicula"
              />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Genero</Form.Label>
              <Form.Select>
                <option value="" disabled hidden selected>Seleccione género</option>
                <option value="1">Comedia</option>
                <option value="2">Drama</option>
                <option value="3">Infantil</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="sintomas">
              <Form.Label>Descripción *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese descripción"
                required
              />
              <Form.Control.Feedback>Dato correcto</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Dato incorrecto
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="text-center">
            <Button type="submit">Agregar nueva pelicula</Button>
          </div>
        </Form>
      </section>
      <section className="my-3">
        <ListaPeliculas />
      </section>
    </div>
  );
};

export default Formulario;
