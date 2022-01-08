import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img1 from './images/Pimples.jpg';
function Pimples(){
    return (
        <div>
            <Container>
            <figure className="position-realtive">
            <img src={img1} alt="pimples" className="image-fluid" />
            </figure>
            <figcaption>
                Use salicylic acid and antibiotics to reduce the bacteria
                that reduces the cause for occuring pimples.
                Thank you for using our services.
            </figcaption>
            </Container>
        </div>
    )
}

export default Pimples;