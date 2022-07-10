import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import SimpleView from './mainView';
import RecentList from './recentList';

import CircularProgress from '@mui/material/CircularProgress';
import Switch from '@mui/material/Switch';

import './App.css';



const App = () => {
  const [data, setData] = useState(null);
  const [SearchNewHero, setSearchNewHero] = useState(false);
  const [RecentlyFound, setRecentlyFound] = useState([]);
  const [RecentListLength, setRecentListLength] = useState(0);
  const [view, setView] = useState(false);
  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  useEffect(() => {
    const fetchData = async (url, hook) => {
      try{
        const result = await axios.get(url);
        if(SearchNewHero!=false){setSearchNewHero(!SearchNewHero);}
        hook(result.data);
      } catch (err){
        console.error(err);
      }
    }
    if(!data){
      const randomId=generateRandomInteger(700);
      fetchData(`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/${randomId}`, setData);
    }
    
    if(SearchNewHero!=false){
      const randomId=generateRandomInteger(700);
      fetchData(`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/${randomId}`, setData);
    }

  }, [SearchNewHero]);
  const buttonClick = () => {
    if(data){
      setRecentlyFound([...RecentlyFound, data]);
      setRecentListLength(RecentListLength+1);
      
      //console.log(RecentlyFound);
    }
    setSearchNewHero(!SearchNewHero);
  }
  useEffect(()=>{
    console.log(RecentlyFound);
    RecentlyFound.map((item)=>{
      console.log(item);
      return(<li>{item.name}</li>);
    })
  },[RecentListLength]);

  // const viewButtonClick = () => {
  //   setView(!view);
  //   console.log(view);
  // }
  document.getElementsByClassName('btnView').onClick = function(){
    console.log('clicked');
    setView(!view);
    console.log(view)
  }
  console.log("data: ",data);
  return (
    
    <div className="MainDiv">
      <div className="loaderContainer">
      <h2>{data === null && <CircularProgress size={600} />}</h2>
      </div>
      <div className="listaHeroes" >
          <RecentList list={RecentlyFound} />
      </div>
      <div className="container">
        <h2>HOLA MUNDO</h2>
        <button onClick={buttonClick}>RANDOM HERO</button>
        <div className="fullInfo">
        {data!==null && <SimpleView data={data} />}
        </div>
        {/* <p>{}</p> */}
      </div>
    </div>
    
  )

  


  
}
export default App;
