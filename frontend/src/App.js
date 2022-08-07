import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Reviewpage from "./Pages/ReviewPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/info" component={Reviewpage} />
    </div>
  );
}

export default App;
