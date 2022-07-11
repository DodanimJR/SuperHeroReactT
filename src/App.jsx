import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import SimpleView from './mainView';
import RecentList from './recentList';

import CircularProgress from '@mui/material/CircularProgress';



import './App.css';




const App = () => {
  const [data, setData] = useState(null);
  const [SearchNewHero, setSearchNewHero] = useState(false);
  const [RecentlyFound, setRecentlyFound] = useState([]);

  const [clickedIndex, setclickedIndex] = useState(false);
  const btnFavorites=document.getElementById("btnFavorites");
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
      console.log('data Updated');
      if(data['favorite']==true){
        btnFavorites.style.color="red";
        btnFavorites.innerText="Remove from favorites";
      }else{
        btnFavorites.style.color="green";
        btnFavorites.innerText="Add to favorites";
      }
    }
  }, [data]);

  useEffect(()=>{
    if(clickedIndex!=null){
      for(const hero of RecentlyFound){
        if(hero.name==clickedIndex){
          setData(hero);
        }
      }
      
    }
  }, [clickedIndex]);
  const FavbuttonClick = () => {
    if(data){
      if(btnFavorites.innerText=="Add to favorites"){
        
        btnFavorites.style.color="red";
        btnFavorites.innerText="Remove from favorites";
        data['listIndex']=RecentlyFound.length;
        data['favorite']=true;
        setRecentlyFound([...RecentlyFound, data]);
      }else if(btnFavorites.innerText=="Remove from favorites"){

        btnFavorites.style.color="green";
        btnFavorites.innerText="Add to favorites";
        data['favorite']=false;
        setRecentlyFound(RecentlyFound.filter(hero=>hero.name!=data.name));

      }
    }
  }
  const RandombuttonClick = () => {
    setSearchNewHero(!SearchNewHero);
  }
  console.log("data: ",data);
  return (
    
    <div >
      <Header></Header>
      <div className="PABLO">
        <div className="listaHeroes" id="listaHeroes">
          <h1>Favorite Heroes</h1>
          <RecentList list={RecentlyFound}  setclickedIndex={setclickedIndex} clickedIndex={clickedIndex}  />
        </div>
        <div className="fullInfo">
          <div><h1>Main Info</h1></div>
        <div className="buttonGroup">
          <button  id="btnFavorites" onClick={FavbuttonClick}>Add to Favorites</button>
          <button className="button-54" onClick={RandombuttonClick}>RANDOM HERO</button>
        </div>
        {data!==null && <SimpleView data={data} />}
      </div>
      </div>
      
      <div className="loaderContainer">
        <h2>{data === null && <CircularProgress size={600} />}</h2>
      </div>
      <footer>
      <div class="footer-content">
        <h3>DODANIMJR</h3>
        <p>Pablo tiene talento para el UX</p>
      </div>
      <div class="footer-bottom">
        <p>copyright &copy;2022 <a href="https://github.com/DodanimJR">DODANIMJR</a>  </p>
        
      </div>
    </footer>
    </div>
    
  )

}
export default App;
