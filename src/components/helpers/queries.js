const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_receta = import.meta.env.VITE_API_RECETA;
const URL_comentarios = import.meta.env.VITE_API_COMENTARIOS;

export const login = async (usuario) => {
    console.log(usuario);
    try {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios);
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if (usuarioBuscado) {
            //console.log('Email encontrado');
            if (usuarioBuscado.password === usuario.password) {
                return usuarioBuscado;
            } else {
                //console.log('password incorrecto');
                return 0;
            }
        } else {
            //console.log('email incorrecto');
            return 0;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const registraUsuario = async (nuevoUsuario) => 
{
    try
    {
        //Recupero los usuarios almacenados en la API
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const existeNomb = listaUsuarios.find((itemUsuario)=>itemUsuario.nombreUsuario === nuevoUsuario.nombreUsuario);
        const existeEmail = listaUsuarios.find((itemUsuario)=>itemUsuario.email === nuevoUsuario.email);
        //console.log(existeNomb);
        if(!existeEmail && !existeNomb)
        {
            if(nuevoUsuario.password === nuevoUsuario.password_r)
            {
                delete nuevoUsuario.password_r;
                nuevoUsuario.type = 'user';
                APICreaUsuario(nuevoUsuario);
                return 1;
            }else
            {
                return 'La contraseña repetida no coincide con la contraseña ingresada inicialmente.';
            }
        }else
        {
            if(existeEmail && !existeNomb)
            {
                return 'El email ingresado ya se encuentra registrado.';
            }else if(!existeEmail && existeNomb)
            {
                return'El nombre de usuario ingresado ya se encuentra registrado.';
            }else if(existeEmail && existeNomb)
            {
                return 'El nombre de usuario y el mail ingresados ya se encuentran registrados.';
            }
        }
    }catch(error)
    {
        console.log('A ocurrido un error: '+error);
        return null;
    }
}

const APICreaUsuario = async (nuevoUsuario) =>
{
    try
    {
        console.log(nuevoUsuario);
        const respuesta = await fetch(URL_usuario, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(nuevoUsuario)
        });
        return respuesta;
    }catch(error)
    {
        console.log('A ocurrido un error: ',error);
    }
}

export const obtenerRecetas = async () => {
    try {
        const respuesta = await fetch(URL_receta);
        const conjuntoRecetas = await respuesta.json();
        return conjuntoRecetas;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerReceta = async (id) => {
    try {
        const respuesta = await fetch(`${URL_receta}/${id}`);
        const recetaEditar = await respuesta.json();
        return recetaEditar;
    } catch (error) {
        console.log(error);
    }
}

export const APIBorrarReceta = async (id) => {
    try {
        const respuesta = await fetch(`${URL_receta}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const APICrearReceta = async (platillo) => {
    try {
        const respuesta = await fetch(URL_receta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(platillo)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const APIEditarReceta = async (platillo, id) => {
    try {
        const respuesta = await fetch(`${URL_receta}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(platillo)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const ingresaComentario = async (comentario) =>
{
    try
    {
        const respuesta = await fetch(URL_comentarios, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(comentario)
        });
        return respuesta;
    }catch(error)
    {
        console.log('A ocurrido un error: ',error);
        return null;
    }
}