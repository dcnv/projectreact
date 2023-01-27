import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import './Styles.css';

const Products = () => {
 const [movies, setMovies] =useState();

    useEffect(()=>{
       async function gettingData(){
            const {data }= await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            console.log(data,"data here")
            setMovies(data);
        } 
        gettingData();
    },[])


  return (
    <div>
        <h1>All movies</h1>
      <div style={{display: 'flex'}}>
           <div style={{width:"20%", border:'1px solid black'}}>Filter</div>
           <div style={{width:"85%", border:'1px solid black', display:"flex", flexwrap:"wrap", justifyContent:"space-evenly"}}>
                {movies && movies.map((e,i) => (
           <div key={i} id='data'>
                <div id="poster">
                    <img src={e.Poster} alt="Movie Poster"/>
                    <div>
                      <h3>{e.Title}</h3>  
                      <p>{e.Year}</p>
                      <p>{e.Runtime}</p>
                      <button>Buy</button>
                      </div>
                      </div>
                      </div>
                       ))}   
               </div>
          </div>
     </div>

  )
}

export default Products