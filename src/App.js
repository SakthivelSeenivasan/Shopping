import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' exact>
        Home
      </Route>
      <Route path='/cart' exact>
        Cart
      </Route>
    </BrowserRouter>
  );
}

export default App;
