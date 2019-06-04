import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from '../pages/Home'
import About from '../pages/About'
import SignUp from '../pages/SingUp'
import LogIn from '../pages/LogIn'
import Navbar from '../components/Navbar'
import store from '../../redux/store'
import {SET_CURRENT_USER} from '../../redux/types'
import {authenticateUser} from '../../redux/actions'
import {CURRENT} from '../../apollo/Queries'
import {Query} from 'react-apollo'
import './App.css'
import Catalog from '../pages/Catalog'
import PrivateRoute from '../components/PrivateRoute';
import Account from '../pages/Account';
import Settings from '../pages/Settings';
import Abstract from '../pages/Abstract';
import PublicRoute from '../components/PublicRoute';


function App() {
  return (
    <Provider store={store}>
      <Query query={CURRENT}>
        {({loading, error, data})=>{
          if(loading) return <div>Loading...</div>
          if(error) {
            store.dispatch({type:SET_CURRENT_USER, payload:{}})
          }
          else{
            store.dispatch(authenticateUser(data.current))
          }
       
          return(
            <Router>
            <Navbar/>
          <Switch>
            <div className="container content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/catalog" component={Catalog}/>
            <PrivateRoute path="/user" component={Account}/>
            <PrivateRoute path="/user/settings" component={Settings}/>
            <PrivateRoute path="/user/abstract" component={Abstract}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <PublicRoute exact path="/login" component={LogIn}/>
     
            </div>
          </Switch>
          </Router>
          )
          

        }}
      </Query>
   </Provider>
 
  );
}

export default App;
