import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import SimpleView from './mainView';

import CircularProgress from '@mui/material/CircularProgress';
import Switch from '@mui/material/Switch';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  // const fetchData = async (Id) => {
  //   try{
  //     const result = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/${Id}`);
  //     console.log("result data:",result.data);
  //     if (result){
  //       return result.data
  //     }
  //     //console.log(result.data);
  //     //return result.data.response
  //   } catch (err){
  //     console.error(err);
  //   }
  // }
  // const getData = async () => {
  //   const result = await fetchData(50);
  //   try {
  //     if (result){
  //       setData({result});
        
  //       if(data!=null){
  //         console.log("data:",data);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // if(!data){
  //   getData();
  // }

  // if(data!=null){
  //   console.log("data",data);
  //   console.log("data.result",data.result);
  // }

  useEffect(() => {
    const fetchData = async (url, hook) => {
      try{
        const result = await axios.get(url);

        hook(result.data);
      } catch (err){
        console.error(err);
      }
    }
    if(!loaded){
      //`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/${Id}`
      fetchData("https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/50", setData);
    }
  }, [loaded]);
  const buttonClick = () => {
    setLoaded(!loaded);
  }
  console.log("data: ",data);
  return (
    
    <div className="MainContainer">
      <div className="loaderContainer">
      <h2>{data === null && <CircularProgress size={60} />}</h2>
      </div>
      <div className="buttonCargar" >
        <p>HOLA ANDRE</p>
        <button onClick={buttonClick}>Cargar</button>
      </div>
      <div className="container">
        <h2>HOLA MUNDO</h2>
        
        {/* <p>{}</p> */}
      </div>
      <div>
        {data!==null && <div><p>{data.name}</p></div>}
        {/* render={loaded!==null && <SimpleView data={data} />} */}
      </div>
    </div>
    
  )

  


  
}
export default App;
