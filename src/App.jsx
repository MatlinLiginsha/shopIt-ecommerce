import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GetAllProductsComponent from "./components/GetAllProductsComponent/GetAllProductsComponent";
import './App.css';
import AboutShopComponent from "./components/AboutShopComponent/AboutShopComponent";
import WishlistComponent from "./components/WishlistComponent/WishlistComponent";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaHeart, FaShoppingCart } from "react-icons/fa"; // Import icons
import CartComponent from "./components/CartComponent/CartComponent";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="container">

          <nav className="nav-menu">
            <div className="nav-left">
              <Link to="/" className="nav-link">
                <FaHome className="nav-icon" />
                <span className="nav-text">Home</span>
              </Link>
              <Link to="/about" className="nav-link">
                <FaInfoCircle className="nav-icon" />
                <span className="nav-text">About</span>
              </Link>
            </div>

            <div className="nav-center">
              <div className="logo">
                <img src="/images/shopit_logo1.png" alt="Shopit Logo" className="logo-image" />
                <p className="quote">“Your one-stop shop for everything!”</p>
              </div>
            </div>

            <div className="nav-right">
              <Link to="/wishlist" className="nav-link">
                <FaHeart className="nav-icon" />
                <span className="nav-text">Wishlist</span>
              </Link>
              <Link to="/cart" className="nav-link">
                <FaShoppingCart className="nav-icon" />
                <span className="nav-text">Cart</span>
              </Link>
            </div>
          </nav>

        </header>

        <Routes>
          <Route path="/" element={<GetAllProductsComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/about" element={<AboutShopComponent />} />
          <Route path="/wishlist" element={<WishlistComponent />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 ShopIT. All rights reserved.</p>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://github.com/MatlinLiginsha" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://in.linkedin.com/in/matlin-liginsha-933827290" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
