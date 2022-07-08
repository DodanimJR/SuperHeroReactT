import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import SimpleView from './mainView';

import CircularProgress from '@mui/material/CircularProgress';
import Switch from '@mui/material/Switch';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const fetchData = async (Id) => {
    try{
      const result = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/${Id}`);
      console.log("result data:",result.data);
      if (result){
        return result.data
      }
      //console.log(result.data);
      //return result.data.response
    } catch (err){
      console.error(err);
    }
  }
  const getData = async () => {
    const result = await fetchData(50);
    try {
      if (result){
        setData({result});
        
        if(data!=null){
          console.log("data:",data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  if(!data){
    getData();
  }

  if(data){
    console.log(data);
  }
  return (
    
    <div className="MainContainer">
      <div className="loaderContainer">
      <h2>{data === null && <CircularProgress size={60} />}</h2>
      </div>
      <div className="buttonCargar">
        <button onClick={getData}>Cargar</button>
      </div>
      {/* <div className="container">
        <SimpleView apiData={data} />
      </div> */}
    </div>
    
  )

  


  
}
export default App;
