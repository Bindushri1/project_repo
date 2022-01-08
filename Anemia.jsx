import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './face.css';
import {Container} from "react-bootstrap";
import img7 from './images/Anemia.jpg';
function Anemia(){
    return (
        <div>
            <Container>
            
                <img src={img7} alt=""/>
            <figcaption>
                Take Iron, vitamin B suppliments a lot to get rid off anemia.
                Consult a doctor if problem is serious.
                Thank you for using our services.

            </figcaption>
        
            </Container>
        </div>
    )
}

export default Anemia;