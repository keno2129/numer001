import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Bisection from './components/pages/Bisection Method';
import Falseposition from './components/pages/False_position'
import NewtonR from './components/pages/Newton-raphson'
import Onepoint from './components/pages/Onepoint'
import secant from './components/pages/Secant'
import camer from './components/pages/Cramer'
import gauss from './components/pages/Gauss'
import jordan from './components/pages/Jordan'
import LU from './components/pages/LU'
import jacobi from './components/pages/Jacobi'
import seidel from './components/pages/Seidel'
import conjo from './components/pages/Gradient'
import cholesky from './components/pages/Cholesky'
import Newton from './components/pages/Newton'
import lagrange from './components/pages/Lagrange'
import spline from './components/pages/Spline'
import leastRLinear from './components/pages/Linear'
import leastRPoly from './components/pages/Polynomial'
import leastRMuti from './components/pages/MultipleLinear'
import test from './components/One-point'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Bisection' component={Bisection} />
          <Route path='/Falseposition' component={Falseposition}/>
          <Route path='/NewtonR' component={NewtonR}/>
          <Route path='/Onepoint' component={Onepoint}/>
          <Route path='/secant' component={secant}/>
          <Route path='/camer' component={camer}/>
          <Route path='/gauss' component={gauss}/>
          <Route path='/jordan' component={jordan}/>
          <Route path='/jordan' component={jordan}/>
          <Route path='/LU' component={LU}/>
          <Route path='/jacobi' component={jacobi}/>
          <Route path='/seidel' component={seidel}/>
          <Route path='/conjo' component={conjo}/>
          <Route path='/cholesky' component={cholesky}/>
          <Route path='/Newton' component={Newton}/>
          <Route path='/lagrange' component={lagrange}/>
          <Route path='/spline' component={spline}/>
          <Route path='/leastRLinear' component={leastRLinear}/>
          <Route path='/leastRPoly' component={leastRPoly}/>
          <Route path='/leastRMuti' component={leastRMuti}/>  
          <Route path='/test' component={test}/>  
         </Switch>
      </Router>
    </>
  );
}

export default App;
