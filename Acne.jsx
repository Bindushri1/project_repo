import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img2 from './images/Acne.jpg';
function Acne(){
    return (
        <div>
            <Container>
            
                <img src={img2} alt=""/>
            <figcaption>
                To get rid of acne try using Benzoyl peroxide / 
                Salicylic acid and Antibacterial soap.
                Thank you for using our services.

            </figcaption>
        
            </Container>
        </div>
    )
}

export default Acne;