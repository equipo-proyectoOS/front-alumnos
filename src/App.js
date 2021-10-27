//import './App.css';
import './bootstrap/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import Home from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import Users from "./components/pages/Users";
import Registro from"./components/pages/Registro";





function App() {
  /* const decirSaludo = (params) => {
    alert(`Hola ${params}`)
    
  } */
  const Routing = () => {
  
   
  
    return(
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registro" component={Registro}/>
      </Switch>
    )
  }
    return (
  <>
  
      
      <Router>
        <Navbar/>
        <Routing/>
      </Router>
  
      {/* <div className="row mx-auto w-75">
        <div className="cold">
          <button
            onClick={() => decirSaludo('AGUSTIN')}
            className='btn-info'
        >
          Saludar
        </button>
        </div>
      </div> */}
  
  </>
  
    )
  }

export default App;