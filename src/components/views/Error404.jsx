import { Button } from 'react-bootstrap';
import error from '../../assets/Error404.gif'
import "../../App.css"

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <article>
             <img src={error} alt="error 404" className='error404-img'/>
             <h1 className='error404-texto'>Error 404</h1>
            </article>
            <div className='error404-contenido'>
            <Button variant='danger'>Volver al inicio</Button>
            </div>
        </section>
    );
};

export default Error404;