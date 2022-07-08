import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';


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
    if (result){
      setData(result);
      
      if(data!=null){
        console.log("data:",data);
      }
    }
  }
  
  if(!data){
    getData();
  }

  return (
    <div>
      <button onClick={getData}>getHero</button>
      
    </div>
  )

  if(data){
    console.log(data);
  }


  
}
export default App;
