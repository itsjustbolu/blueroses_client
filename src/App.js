import "./App.css";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Menu from "./pages/Menu";
import Payments from "./pages/Payments";
import PlaceOrder from "./pages/PlaceOrder";
import Suppliers from "./pages/Suppliers";
import Status from "./pages/Status";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/customers" component={Customers} exact />
        <Route path="/employees" component={Employees} exact />
        <Route path="/menu" component={Menu} exact />
        <Route path="/payments" component={Payments} exact />
        <Route path="/place-order" component={PlaceOrder} exact />
        <Route path="/suppliers" component={Suppliers} exact />
        <Route path="/status" component={Status} exact />
      </Switch>
    </Router>
  );
}

export default App;
