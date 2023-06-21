import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { APIEditarReceta, obtenerReceta } from "../../helpers/queries";
import { useParams, useNavigate  } from "react-router-dom";
import 'sweetalert2/dist/sweetalert2.css'
import Swal from 'sweetalert2';

const EditarReceta = () => {
  const { id } = useParams();
  const navegacion = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerReceta(id).then((respuesta) => {
      console.log(respuesta);
      setValue("nombrePlatillo", respuesta.nombrePlatillo)
      setValue("imagen", respuesta.imagen)
      setValue("categoria", respuesta.categoria)
      setValue("descripcion", respuesta.descripcion)
      
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo obtener el platillo. Por favor, intenta nuevamente más tarde.',
      })
    })
  }, [])

  const onSubmit = (recetaEditada,) => {
    console.log(recetaEditada);
    APIEditarReceta(recetaEditada, id).then((respuesta)=>{

      if(respuesta){
      if(respuesta && respuesta.status === 200){
        Swal.fire("Receta actualizada", `El platillo: ${recetaEditada.nombrePlatillo} fue actualizado correctamente`, "success")
        navegacion("/administrador")
      }else{
        Swal.fire("Ocurrio un error", `El platillo: ${recetaEditada.nombrePlatillo} no fue actualizado. Intenta esta operacion mas tarde.`, "error")
      }
     }
    })
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar Receta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formRecetaNombre">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Strudel de manzana"
            {...register("nombrePlatillo", {
              required: "El nombre del platillo es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 100",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombrePlatillo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Escriba una descripción de la receta o platillo"
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 10,
                message: "La descripción debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 2000,
                message: "La descripción debe tener como máximo 2000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Elegir una categoria es obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Aperitivos">Aperitivos</option>
            <option value="Panes y masas">Panes y masas</option>
            <option value="Comida Argentina">Comida Argentina</option>
            <option value="Postres">Postres</option>
            <option value="Bebidas y tragos">Bebidas y tragos</option>
            <option value="Reposteria">Reposteria</option>
            <option value="Aves y carnes">Aves y carnes</option>
            <option value="Arroz, legumbres y pastas">Arroz, legumbres y pastas</option>
            <option value="Mariscos y pescados">Mariscos y pescados</option>
            <option value="Sopas y caldos">Sopas y caldos</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="warning" className="my-4" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarReceta;