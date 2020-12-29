import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { NavBarScreen } from '../components/ui/NavBarScreen';
import { AboutView } from '../components/views/AboutView';
import { ContactView } from '../components/views/ContactView';
import { ProjectsView } from '../components/views/ProjectsView';
import { WellcomeView } from '../components/views/WellcomeView';

export const AppRouter = () => {
  return (
    <Router>
      <NavBarScreen />
      <div>
        <Switch>
          <Route exact path="/" component={ WellcomeView }/>
          <Route exact path="/projects" component={ ProjectsView } />
          <Route exact path="/about" component={ AboutView } />
          <Route exact path="/contact" component={ ContactView } />
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
}
