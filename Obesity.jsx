import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img9 from './images/Obesity.jpg';
function Obesity(){
    return (
        <div>
            <Container>
            
                <img src={img9} alt=""/>
            <figcaption>
                To get rid of obesity, exercise regularly and avoid eating junk food.
                Consult a doctor if necessary.
                Thank you for using our services.

            </figcaption>
        
            </Container>
        </div>
    )
}

export default Obesity;