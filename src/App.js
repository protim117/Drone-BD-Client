import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import AuthProvider from './constext/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Buy from './Pages/Buy/Buy';
import Explore from './Pages/Explore/Explore';
import DashBoard from '../src/Pages/DashBoard/DashBoard/DashBoard'

function App() {
  return (
    // wrapping up with context 
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path='/'>
            <Home></Home>
         </Route>
         <PrivateRoute path='/buy/:productId'>
            <Buy></Buy>
         </PrivateRoute>
         <PrivateRoute path='/dashboard'> 
           <DashBoard></DashBoard>
         </PrivateRoute>
         <Route exact path='/explore'>
           <Explore></Explore>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Registration></Registration>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
