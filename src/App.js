import React from "react";
import "./App.css";
import Card from "./components/Card";
import Slider from "./components/Banner";
import Media from "./components/Media";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
     
      <Slider />
      <Card />
      <Media />
      <NewsLetter />
      <Footer />
      
    </div>
    </Provider>
  );
}

export default App;
