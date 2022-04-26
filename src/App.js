import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboardhome from "./components/Dashboard/Dashboardhome/Dashboardhome";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/product/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="/product">
              <Product></Product>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboardhome></Dashboardhome>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
