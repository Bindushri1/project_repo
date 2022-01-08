import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img5 from './images/Dandruff.jpg';
function Dandruff(){
    return (
        <div>
            <Container>
            <figure className="position-realtive">
            <img src={img5} alt="dandruff" className="image-fluid" />
            </figure>
            <figcaption>
            Use Neutrogena T to get rid off dandruff.
            Thank you for using our services.
            </figcaption>
            </Container>
        </div>
    )
}

export default Dandruff;