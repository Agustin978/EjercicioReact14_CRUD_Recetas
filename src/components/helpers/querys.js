const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_receta = import.meta.env.VITE_API_RECETA;

//Funcion para logueo
export const login = async (usuario) => 
{
    try
    {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if(usuarioBuscado)
        {
            if(usuarioBuscado.password === usuario.password)
            {
                console.log('Se inicio sesion exitosamente.');
                return usuarioBuscado;
            }else
            {
                return 0;
            }
        }else
        {
            return 0;
        }
    }catch(error)
    {
        console.log('A ocurrido un error: '+error);
        return null;
    }
}
