import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import SimpleView from './mainView';
import RecentList from './recentList';

import CircularProgress from '@mui/material/CircularProgress';
import { Card  } from "@mui/material";
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiTypography from '@mui/material/Typography';


import './App.css';
import { Event } from "@mui/icons-material";
import { click } from "@testing-library/user-event/dist/click";



const App = () => {
  const [data, setData] = useState(null);
  const [SearchNewHero, setSearchNewHero] = useState(false);
  const [RecentlyFound, setRecentlyFound] = useState([]);
  const [RecentListLength, setRecentListLength] = useState(0);
  const [clickedIndex, setclickedIndex] = useState(false);
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
    if(SearchNewHero!=false){
      const randomId=generateRandomInteger(732);
      fetchData(`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/${randomId}`, setData);
    }

  }, [SearchNewHero]);
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
      const randomId=generateRandomInteger(732);
      fetchData(`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2223169807851173/${randomId}`, setData);
    }else{
      console.log('?');
    }
  }, [data]);

  useEffect(()=>{
    if(clickedIndex){
      for(const hero of RecentlyFound){
        if(hero.listIndex==clickedIndex){
          setData(hero);
        }
      }
      
    }
  }, [clickedIndex]);
  const FavbuttonClick = () => {
    if(data){
      data['listIndex']=RecentlyFound.length;
      setRecentlyFound([...RecentlyFound, data]);
    }
  }
  const RandombuttonClick = () => {
    setSearchNewHero(!SearchNewHero);
  }
  console.log("data: ",data);
  return (
    
    <div className="MainDiv">
      <div className="loaderContainer">
      <h2>{data === null && <CircularProgress size={600} />}</h2>
      </div>
      <div className="listaHeroes" id="listaHeroes">
          <RecentList list={RecentlyFound}  setclickedIndex={setclickedIndex} clickedIndex={clickedIndex}  />
      </div>
      <div className="container">
        <h2>HOLA MUNDO</h2>
        <button onClick={FavbuttonClick}>FAVORITE</button>
        <button onClick={RandombuttonClick}>RANDOM HERO</button>
        <div className="fullInfo">
        {data!==null && <SimpleView data={data} />}
        </div>
        
      </div>
    </div>
    
  )

  


  
}
export default App;
