import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import ContextProvider from './context'
import Home from './components/Home'
import Dashboard from './components/Dashboard'


ReactDOM.render(
   <ContextProvider>
      <BrowserRouter>
         <Switch>
            <Route path='/inicio' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/' component={Home} />
         </Switch>
      </BrowserRouter>
   </ContextProvider>,
   document.getElementById('root')
)