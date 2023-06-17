import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../helpers/queries";

const Login = ({setUsuarioLogueado}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navegacion = useNavigate();

    const onSubmit = (usuario) =>
    {
        //Aqui debo realizar los controles para el ingreso del usuario logueado.
        login(usuario).then(respuesta => 
        {
            if(respuesta && respuesta != 0)
            {
                //Si se loguea exitosamente
                sessionStorage.setItem('user', JSON.stringify(respuesta));
                setUsuarioLogueado(respuesta);
                Swal.fire('Bienvenido', ':)', 'success');
                navegacion('/administrador');
            }else if(respuesta === 0)
            {
                Swal.fire('Error', 'Email o password incorrectos.', 'error');
            }else
            {
                Swal.fire('Error', 'Hay inconvenientes para conectarse a la base de datos actualmente. Intente nuevamente mas tarde.', 'error');
            }
        });
        reset();
    }


    return (
        <Container className="mainSection">
        <Card className="my-5">
          <Card.Header as="h5">Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                      value:80,
                      message:'El email, debe contener como minimo 80 caracteres.'
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
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
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
};

export default Login;