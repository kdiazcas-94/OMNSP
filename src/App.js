import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/HomePage'
import ErrorComp from './pages/errorcomp/ErrorComp'
import Header from './components/Header/Header'
import StickyFooter from './components/Footer/StickyFooter'
import MyProfile from "./pages/profile/MyProfile"
import myGroups from "./pages/groups/myGroups"
import myTopics from "./pages/topics/myTopics"


class App extends Component {
  render(){
    return (
      <div className= 'containerMain'>
            <BrowserRouter>
              <Header />
                <Switch>
                  <Route exact path='/' component={Homepage}/>
                  <Route exact path='/home' component={Homepage}/>
                  <Route exact path='/Profile-Page' component={MyProfile}/>
                  <Route exact path='/My-Groups' component={myGroups}/>\
                  <Route exact path='/My-Topics' component={myTopics}/>
                  <Route exact path='*' component={ErrorComp}/>
                </Switch>
                <StickyFooter />
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
