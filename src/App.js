import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Service from './components/Servicess/Service'
import Schedule from './components/Schedule/Schedule'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Auth0Profile from './components/Auth0Profile/Auth0Profile'
// import Programs from './components/Programs/programs'
import Testimonals from "./components/Testimonals/Testimonals";
import Blog from './components/Blog/Blog'
import Auth0 from './components/Auth0/Auth0'
const endpoint = "https://strongbackend.herokuapp.com/fitnessescom"
const PORT = 'http://localhost:3000'



//import 'bootstrap/dist/css/bootstrap.min.css';

// const Button = styled.button`
// font-family: sans-serif;
// font-size: 1.3rem;
// border: none;
// border-radius: 5px;
// `


export default function App(props) {

  let history = useHistory();

  const [enter, updateEnter] = useState(false);

  const [fitness, setFitness] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    name: '',
    starsign: '',
    age: '',
    img: '',
    ltl: ''
  });
  const getFitness = async () => {
    try {
      const response = await fetch('http://localhost:3000/fitnesses');
      const data = await response.json();
      setFitness(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(
    () => {
      (
        async function () {
          await getFitness();
        }
      )()
    }, [])
  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
    updateFormInputs(updatedFormInputs);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/fitnesses',
        formInputs
      );
      const createdFitness = response.data
      await updateFormInputs({
        name: '',
        starsign: '',
        age: '',
        img: '',
        ltl: ''
      })
      await setFitness([createdFitness, ...fitness])
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleEnter = event => {
    event.preventDefault();
    updateEnter(true);
    history.push('/home')
  }

  return (
    <Layout>
      

      <NavBar/>
      <div className="body">
        <Switch>
          
          <Route
            path="/home"
            render={(props) => {
              return <Home />;
            }}
          />
          {enter === false && <Route
            exact path="/"
            render={(props) => {
              return <Home handleEnter={handleEnter} />;
            }}
          />}
          
          <Route
            path="/about"
            render={(props) => {
              return <About />;
            }}
          />
          <Route
            path="/service"
            render={(props) => {
              return <Service />;
            }}
          />
         
          <Route
            path="/profiles"
            render={props => {
              return <Auth0Profile />;
            }}
          />
          <Route
            path="/contact-us"
            render={(props) => {
              return <Contact/>
            }}
          />
          

          <Route
            path="/testimonals"
            render={(props) => {
              return <Testimonals />;
            }}
          />

          <Route
            path="/blog"
            render={(props) => {
              return <Blog />;
            }}
          />

          {/* <Route
            path="/programs"
            render={(props) => {
              return <Programs />;
            }}
          /> */}
         
          <Route
            path="/:id"
            render={props => {
              return <Home {...props} />;
            }}
          />
          
        </Switch>
      </div>
      
    </Layout>
    
  );
}
