import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Reviewpage from "./Pages/ReviewPage";
import CreateAccountPage from "./Pages/CreateAccountPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/info" component={Reviewpage} />
      <Route path="/create-account" component={CreateAccountPage} />
    </div>
  );
}

export default App;
