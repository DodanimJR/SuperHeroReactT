import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import SimpleView from "./SimpleView";
import ComplexView from "./ComplexView";

import CircularProgress from '@mui/material/CircularProgress';
import Switch from '@mui/material/Switch';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [complejo, setComplejo] = useState(false);

   // descriptive programming languages
    // declarative: select * from table
    // imperative: 

    // eg: SQL, LISP, HASKELL, 


  // functional
    // eg: python

    // these are 2 forms of coding:
      // imperative
      var myDecision = false
      var sam = 'sam'
      if(myDecision === false && sam === 'sam'){
        console.log("It's false")
      } else {
        console.log('its true')
      }

      // declarative
      myDecision = false && sam === 'sam' ? console.log('its false') : console.log('its true')


  useEffect(() => {
    const fetchData = async (url, hook) => {
      try{
        const result = await axios.get(url);
        hook(result.data);
      } catch (err){
        console.error(err);
      }
    }
    if(!data){
      fetchData("https://api2.binance.com/api/v3/ticker/24hr", setData);
    }
  })

  useEffect(() => {
    console.log({complejo});
  }, [complejo])


  const manejarToggle = () => {
    setComplejo((state) => !state)
  }
  return(
    <div>
      <Header />
      <div className="mainDiv">
       {/*inline styles */}
        <div style={{
          textAlign: 'center'
        }}>
          <span>Simple</span>
          <Switch checked={complejo} onChange={manejarToggle} />
          <span>Complejo</span>
        </div>
        <div className="loaderContainer">
          <h2>{data === null && <CircularProgress size={60} />}</h2>
        </div>
        {
          complejo ? <div><ComplexView apiData={data} /></div> : 
          <div className="simpleViewContainer">
            <SimpleView apiData={data} />
          </div>
        }
      </div>
    </div>
  )
}
export default App;
