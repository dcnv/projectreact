import React ,{useState ,useEffect }from 'react'
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
    const Home = () => {
        const[name,setName]=useState("");
        const[products, setProducts]= useState([])
        const router = useNavigate();
        
    
    
        useEffect(()=>{
          var userData = JSON.parse(localStorage.getItem("userData"));
          console.log(userData,"userData here")
          if(userData){
            setName(userData.name)
            setProducts(userData.products)
            console.log(userData.name,"userData.name here")
          }else{
           router('/login')
          }
        },[])

        async function getData(){
         
          // .then((data)=>{
          //   data.json();
          //   console.log(data);
          // }).catch((error)=> {
          //   console.log(error)
          // })
        }
    
      return (
        <div>
          <Header userName={name}/>
          <button onClick={()=>router("/products")}>Click</button>
          <Footer/>
        </div>
      )
    }
  


export default Home