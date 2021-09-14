import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/About us";
import FeatureBlog from "./components/Feature blog";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import SignUp from "./components/Form/Login";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import PopularFood from "./components/popular food";
import Search from "./components/Search";
import Testimonial from "./components/testimonial";
import Checkout from "./components/Checkout";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <PopularFood />
            <FeatureBlog />
            <Testimonial />
            <Newsletter />
          </Route>
          <Route exact path="/login">
            <SignUp />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/Blogs">
            <Blogs />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
