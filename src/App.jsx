import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GetAllProductsComponent from "./components/GetAllProductsComponent/GetAllProductsComponent";
import GetAllCartItems from "./components/GetAllCartItems/GetAllCartItems";
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="container">
          <div class="logo">
            <img src="/images/shopit_logo1.png" alt="Shopit Logo" class="logo-image" />
            <p class="quote">“Your one-stop shop for everything!”</p>
          </div>
          <nav className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<GetAllProductsComponent />} />
          <Route path="/cart" element={<GetAllCartItems />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
