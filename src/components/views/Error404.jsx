import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import error from '../../assets/Error404.gif';
import '../../App.css';

const Error404 = () => {
  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" className="error404-img" />
      <h1 className="error404-texto">Error 404</h1>
      <p className="error404-texto2">Ups. La página a la que intentas acceder no se encuentra disponible. 
        Para volver a la página principal, haz clic en el botón de abajo.</p>
        <div className="error404-contenido">
        <Link to="/">
          <Button variant="danger">Volver al inicio</Button>
        </Link>
      </div>
    </section>
  );
};

export default Error404;