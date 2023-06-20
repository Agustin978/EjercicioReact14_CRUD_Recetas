import { Card, Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registraUsuario } from "../helpers/queries";
import Swal from "sweetalert2";

const RegistrarUsuarios = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();

    const onSubmit = (nuevoUsuario) =>
    {
        registraUsuario(nuevoUsuario).then(respuesta => 
            {
                if(respuesta === 1)
                {
                    Swal.fire('El usuario se creo exitosamente', ':)', 'success');
                    navigate('/');
                }else if(respuesta)
                {
                    Swal.fire('Error', respuesta, 'error');
                }else
                {
                    Swal.fire('Error', 'Hay inconvenientes para conectarse a la base de datos actualmente. Por favor, Intenta nuevamente mas tarde.', 'error');
                    reset();
                    navigate('/');
                }
            });
    }


    return (
        <Container className="mainSection">
            <Card className="my-5">
                <Card.Header as="h5">Registrar Usuario</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Ingrese su nombre de usuario"
                            {...register('nombreUsuario',
                            {
                                required:'Debe ingresar un nombre de usuario',
                                minLength:{
                                    value:4,
                                    message:'El nombre de usuario debe contener como minimo 4 caracteres.'
                                },
                                maxLength:{
                                    value:14,
                                    message:'El nombre de usuario debe contener como minimo 14 caracteres.'
                                }
                            })}
                            />
                            <Form.Text className="text-danger">
                                {errors.nombreUsuario?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Ingrese un email"
                            {...register('email',
                            {
                                required: 'El email es obligatorio',
                                minLength:{
                                    value:8,
                                    message:'El email, debe contener como minimo 8 caracteres.'
                                },
                                maxLength:{
                                    value:40,
                                    message:'El email, debe contener como minimo 40 caracteres.'
                                },
                                pattern:{
                                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message:'El email proporcionado no es valido.'
                                }
                            })}
                            />
                            <Form.Text className="text-danger">
                            {errors.email?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Ingrese la contraseña"
                            {...register('password',
                            {
                                required: 'El password es obligatorio.',
                                minLength:{
                                value:6,
                                message:'La contraseña como minimo debe contener 6 caracteres.'
                                },
                                maxLength:{
                                value:15,
                                message:'La contraseña debe contener como maximo 15 caracteres'
                                },
                                pattern:{
                                value:/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{6,}$/,
                                message:'La contraseña proporcionada es invalida. La misma debe contener:\n-> Al menos una mayuscula.\n-> Al menos un caracter especial.\n-> Al menos una letra minuscula.\n-> Al menos 6 caracteres.'
                                }
                            })}
                            />
                            <Form.Text className="text-danger">
                            {errors.password?.message}
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Repita la contraseña</Form.Label>
                            <Form.Control
                            type="password"
                            {...register('password_r',
                            {
                                required: 'El password es obligatorio.',
                                minLength:{
                                value:6,
                                message:'La contraseña como minimo debe contener 6 caracteres.'
                                },
                                maxLength:{
                                value:15,
                                message:'La contraseña debe contener como maximo 15 caracteres'
                                },
                                pattern:{
                                value:/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{6,}$/,
                                message:'La contraseña proporcionada es invalida. La misma debe contener:\n-> Al menos una mayuscula.\n-> Al menos un caracter especial.\n-> Al menos una letra minuscula.\n-> Al menos 6 caracteres.'
                                }
                            })}
                            />
                            <Form.Text className="text-danger">
                            {errors.password_r?.message}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RegistrarUsuarios;