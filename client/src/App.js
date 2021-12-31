import "./App.css";
import Topbar from "./component/Topbar";
//import { Container} from "react-bootstrap";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Policy from "./component/Policy";
import  NavBar from './component/NavBar';
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <BrowserRouter>
        <Topbar/>
      <NavBar/>
        <Switch>
        <Route path="/admin" component = {AdminScreen }/>
        <Route path="/orders" component = {OrderScreen } exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/cart" component={CartScreen} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/policy" component={Policy} exact/>
          <Route path="/" component={HomeScreen} exact/>
        </Switch>
    </BrowserRouter>
    
     
   
  );
}

export default App;
