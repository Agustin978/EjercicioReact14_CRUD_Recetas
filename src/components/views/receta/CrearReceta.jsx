import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { APICrearReceta } from "../../helpers/queries";
import 'sweetalert2/dist/sweetalert2.css'
import Swal from "sweetalert2";

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (platilloNuevo) => {
    console.log(platilloNuevo);

    APICrearReceta(platilloNuevo).then((respuesta)=>{
      if(respuesta.status === 201){
        Swal.fire(
          'Receta creada',
          `El platillo ${platilloNuevo.nombrePlatillo} fue creado`,
          'success'
        );
        reset();
      }else{
        Swal.fire(
          'Se produjo un error',
          `Intente realizar esta operacion mas tarde`,
          'error'
        )
      }
    })
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formRecetaNombre">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombrePlatillo", {
              required: "El nombre del platilllo es obligatorio",
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
                value: 500,
                message: "La descripción debe tener como máximo 500 caracteres",
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
              required: "La imagen es obligatoria",
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
        <Button variant="success" className="my-4" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearReceta;