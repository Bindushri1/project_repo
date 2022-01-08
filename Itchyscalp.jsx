import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img6 from './images/Itchy scalp.jpg';
function Itchyscalp(){
    return (
        <div>
            <Container>
            <figure className="position-realtive">
            <img src={img6} alt="itchyscalp" className="image-fluid" />
            </figure>
            <figcaption>
                Use antifungal creams / keratolytics, such as salicylic acid or coal tar
                to reduce the irritation.
                Thank you for using our services.
            </figcaption>
            </Container>
        </div>
    )
}

export default Itchyscalp;