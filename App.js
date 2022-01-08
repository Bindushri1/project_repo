import React from "react";

import './App.css';

import { Hair } from "./components/Hair";

import { Body } from "./components/Body";

import { Face } from "./components/Face";

function App() {

return (

<div className="App">

<header>Choose your treatment</header>

<div className="container">

<Hair/>

<Face />

<Body />

</div>

</div>

);

}

export default App;