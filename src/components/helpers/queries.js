const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_receta = import.meta.env.VITE_API_RECETA;

export const login = async (usuario) => {
    console.log(usuario);
    try {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios);
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if (usuarioBuscado) {
            console.log('Email encontrado');
            if (usuarioBuscado.password === usuario.password) {
                return usuarioBuscado;
            } else {
                console.log('password incorrecto');
                return null;
            }
        } else {
            console.log('email incorrecto');
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
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