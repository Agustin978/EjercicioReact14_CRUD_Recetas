import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('user')) || null;
    
    if(!usuarioLogueado)
    {
        return <Navigate to={'/login'}></Navigate>;
    }else if(usuarioLogueado.type === 'admin')
    {
        return children;
    }else
    {
        return <Navigate to={'/'}></Navigate>
    }
};

export default RutasProtegidas;