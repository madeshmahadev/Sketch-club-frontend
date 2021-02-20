import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Join from "./Join";
import Events from "./Events";
import Team from "./Team";

import ScriptTag from 'react-script-tag';

import logo from "../../assets/sk.png"



class App extends React.Component {
	
   state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
		
      const el = document.querySelector("#loader");
      if (el) {
        el.remove();  
        this.setState({ loading: false }); 
      }
    });
	
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  };

  render() {
		if (this.state.loading) {
		  return null; 
		}
	
	  return (
	    
		<div className="App">
		  <ScriptTag type="text/javascript" src="/content.js" />
		  <Switch>
			<Route path="/" component={Home} exact />
			<Route path="/about-us" component={About} exact />
			<Route path="/events" component={Events} exact />
			<Route path="/contact-us" component={Contact} exact />
			<Route path="/join-us" component={Join} exact />
			<Route path="/team" component={Team} exact />

			<Route path="/events/:id" component={Article} exact />
			<Route path="/category/:id" component={Category} exact />
		  </Switch>
		</div>
	  );
	}
}

export default App;
