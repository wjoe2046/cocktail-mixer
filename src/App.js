import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import { SingleCocktail } from './pages/SingleCocktail';
import { NavBar } from './components/Navbar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/cocktail/:id' exact component={SingleCocktail} />
        <Route path='*' exact component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
