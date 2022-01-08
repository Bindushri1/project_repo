import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img8 from './images/Malnutrition.jpg';
function Malnutrition(){
    return (
        <div>
            <Container>
            
                <img src={img8} alt=""/>
            <figcaption>
                To become healthy, eat balanced diet and take vitamin supplements.
                Consult a doctor if required.
                Thank you for using our services.

            </figcaption>
        
            </Container>
        </div>
    )
}

export default Malnutrition;