import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Lessons from './components/Lessons';
import Home from './components/Home';

function App(props) {

  // console.log('App',props.state);

  let profile = props.state.profilePage;
  let dialogs = props.state.dialogsPage; 
  let navBar = props.state.navbar; 

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav 
          nav={navBar.nav} 
        />
        {/* exact */}
        <Route exact path='/' render={() => <Home /> } />
        <Route path='/home' render={() => <Home /> } />
        <Route path='/profile' render={() => <Main
                                                state={props.state} 
                                                profile={profile} 
                                                dispatch={props.dispatch}  
                                              /> } />
        <Route path='/dialogs' render={() => <Dialogs 
                                                dialogs={dialogs} 
                                                profile={profile.users} 
                                                dispatch={props.dispatch} 
                                              />} />
        <Route path='/lessaos' render={() => <Lessons  />} />
      </div>
    </BrowserRouter>
  );
}

export default App;