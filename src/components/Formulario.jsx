import { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaPeliculas")) || [];

  const [datosCorrectos, setDatosCorrectos] = useState(tareasLocalStorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.setItem("listaPeliculas", JSON.stringify(datosCorrectos));
  }, [datosCorrectos]);

  const agregarDatos = (datos) => {
    Swal.fire({
      title: "Datos guardados correctamente",
      text: `Pelicula: ${datos.nombrePelicula}, genero: ${datos.genero}`,
      icon: "success",
      draggable: true,
    });

    setDatosCorrectos([...datosCorrectos, datos]);

    reset();
  };

  const borrarDatos = (peliculaEliminada) => {
    const indice = datosCorrectos.findIndex(
      (item) => item === peliculaEliminada
    );

    if (indice !== -1) {
      const datosNuevos = [...datosCorrectos];

      datosNuevos.splice(indice, 1);
      setDatosCorrectos(datosNuevos);
    }
  };

  return (
    <div>
      <section className="p-3 border rounded-3 fondoFormulario">
        <Form onSubmit={handleSubmit(agregarDatos)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" >
              <Form.Label>Nombre de pelicula *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese nombre de pelicula"
                {...register("nombrePelicula", {
                  required: "El nombre es un dato obligatorio",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener 3 caracteres como minimo ",
                  },
                  maxLength: {
                    value: 100,
                    message: "El nombre debe tener 100 caracteres como máximo",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombrePelicula?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Genero</Form.Label>
              <Form.Select
                required
                {...register("genero", {
                  required: "El genero es un dato obligatorio",
                })}
              >
                <option value="" disabled hidden>
                  Seleccione género
                </option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Infantil">Infantil</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.genero?.message}
              </Form.Text>
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
                {...register("descripcion", {
                  required: "La descripción  es un dato obligatorio",
                  minLength: {
                    value: 3,
                    message:
                      "La descripción debe tener 3 caracteres como minimo ",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "La descripción debe tener 100 caracteres como máximo",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.descripcion?.message}
              </Form.Text>
            </Form.Group>
          </Row>
          <div className="text-center">
            <Button type="submit">Agregar nueva pelicula</Button>
          </div>
        </Form>
      </section>
      <section className="my-3">
        <ListaPeliculas
          datosProps={datosCorrectos}
          borrarDatosProps={borrarDatos}
        />
      </section>
    </div>
  );
};

export default Formulario;
