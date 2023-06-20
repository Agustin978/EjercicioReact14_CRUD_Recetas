import { Form, Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ingresaComentario } from "../helpers/queries";

const DejaComentario = ({receta, usuarioLogueado}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();

    const onSubmit = (comentario) =>
    {
        //console.log(usuarioLogueado);
        if(Object.keys(usuarioLogueado).length != 0)
        {
            comentario.id_usuario = usuarioLogueado.id;
            comentario.id_platillo = receta.id;
            console.log(comentario);
            ingresaComentario(comentario).then(respuesta => 
                {
                    if(respuesta)
                    {
                        Swal.fire()
                    }
                })
        }else
        {
            Swal.fire('Error', 'Debe registrarse para poder dejarnos su comentario.', 'error');
            navigate('/login');
        }
    }

    return (
        <Card className="my-3">
            <Card.Header className="h-5">Dejenos su comentario:</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control
                        as="textarea"
                        placeholder="Deje aqui su comentario"
                        {...register("comentario",
                        {
                            minLength:{
                                value:4,
                                message:"Su comentario debe conener como minimo 4 caracteres."
                            },
                            maxLength:{
                                value:350,
                                message:"Su comentario debe contener como maximo 350 caracteres."
                            }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.comentario?.message}
                    </Form.Text>
                    <Button variant="primary" type="submit" className="my-3">
                        Ingresar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default DejaComentario;