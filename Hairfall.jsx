import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img4 from './images/Hairfall.jpg';
function Hairfall(){
    return (
        <div>
            <Container>
            <figure className="position-realtive">
            <img src={img4} alt="hairfall" className="image-fluid" />
            </figure>
            <figcaption>
                Use Minoxidil serum and Finasteride to reduce hairfall.
                Thank you for using our services.
            </figcaption>
            </Container>
        </div>
    )
}

export default Hairfall;