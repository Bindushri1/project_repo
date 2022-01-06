import React,{Component} from "react";
import './Mystyle.css'
export class FaceButtons extends React.Component{
    constructor(props){
        super(props)
        this.state= {
        tabType:'Acne'
        }
    }
    toggleMe=(value)=>{
        this.setState({
            tabType:value
        })
    }
    render(){
        return(
            <div>
                <div className="mt-3">
                   <p id="p1"> <button className="btn btn-primary m-2" onClick={()=>this.toggleMe('Acne')}>Acne</button></p>
                   <p id = "p2"><button className="btn btn-primary m-2" onClick={()=>this.toggleMe('Dark Spots')}>Dark Spots </button></p>
                   <p id="p3"><button className="btn btn-primary m-2" onClick={()=>this.toggleMe('Pimples')}>Pimples</button></p>
                  <p id="p4"><button className="btn btn-primary m-2" onClick={()=>this.toggleMe('Dark Circles')}>Dark Circles</button></p>
                  <p id="p5"><button className="btn btn-primary m-2" onClick={()=>this.toggleMe('Tan')}>Tan</button></p>
                    <br/>
                </div>
                <div><p>
                    Get started now with doctor given kit for your hair.it only takes 2 minutes!!!
                    </p>
                </div>
                <p>
                <button className="btn btn-primary m-3" onClick={()=>this.toggleMe('Next')}>Next</button>
                </p>
                <div>{
                    this.state.tabType==='Acne' && <div className="font-weight-bold"></div>
                    }   
                    {
                         this.state.tabType==='Dark Spots' && <div className="font-weight-bold"></div>
                    }      
                    {
                         this.state.tabType==='Pimples' && <div className="font-weight-bold"></div>
                    }
                    {
                         this.state.tabType==='Dark Circles' && <div className="font-weight-bold"></div>
                    }       
                    {
                         this.state.tabType==='Tan' && <div className="font-weight-bold"></div>
                    }
                </div>
            </div>
        )
    }

}
export default FaceButtons