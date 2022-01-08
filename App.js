import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Pimples, Acne, Tan, Hairfall, Dandruff, Itchyscalp, Anemia, Malnutrition, Obesity } from "./components";
function App() {
  return (
    <div className="App">
    <Router>
    <Navigation />
    <Switch>
      <Route path="/" exact component={() => <Pimples />} />
      <Route path="/acne" exact component={() => <Acne />} />
      <Route path="/tan" exact component={() => <Tan />} />
      <Route path="/hairfall" exact component={() => <Hairfall />} />
      <Route path="/dandruff" exact component={() => <Dandruff />} />
      <Route path="/itchyscalp" exact component={() => <Itchyscalp />} /> 
      <Route path="/anemia" exact component={() => <Anemia />} /> 
      <Route path="/malnutrition" exact component={() => <Malnutrition />} /> 
      <Route path="/obesity" exact component={() => <Obesity />} /> 

      
    </Switch>  
    <Footer />
    </Router>
</div>
  );
}
export default App;