// import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import NotFound from './pages/NotFound';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about/about-app" exact>
            <AboutApp />
          </Route>
          <Route path="/about/about-author" exact>
            <AboutAuthor />
          </Route>
          <Route path='/notfound'>
            <NotFound />
          </Route>
          <Route path="*" >
            <Redirect to='/notfound'></Redirect>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
