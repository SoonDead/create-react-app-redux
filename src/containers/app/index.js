import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import ComponentTest from '../componentTest'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/component-test">Component Test</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/component-test" component={ComponentTest} />
    </main>
  </div>
)

export default App
