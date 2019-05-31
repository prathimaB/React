import React from 'react';
import {Route, Switch} from "react-router-dom";
import ReactBasics from './ReactBasics.js';
import Services from './Services';
import Registration from './Registration';
import Home from '../Components/Home';


class Routing extends React.Component {

    render() {
        return (
                    <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/information" component={ReactBasics} />
                     <Route path="/services" component={Services} />
                     <Route path="/registration" component={Registration} />
                    </Switch>                            
        )
      }
  
}

export default Routing;