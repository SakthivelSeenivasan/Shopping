import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact>
          Home
        </Route>
        <Route path='/cart' exact>
          Cart
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
