import { Button } from 'react-bootstrap';
import error from '../../assets/Error404.gif'
const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="error 404" />
            <div>
            <Button variant='danger'>Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;