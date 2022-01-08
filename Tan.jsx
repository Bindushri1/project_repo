import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img3 from './images/Tan.jpg';
function Tan(){
    return (
        <div>
            <Container>
            <figure className="position-realtive">
            <img src={img3} alt="tan" className="image-fluid" />
            </figure>
            <figcaption>
                Use Bio Reach D -TAN Cream / Nature's Essence Lacto Tan Clear to 
                reduce the tan.
            </figcaption>
            </Container>
        </div>
    )
}

export default Tan;