import React,{ useState, useEffect } from 'react'
import style from './style/still.module.css'
import CardInfo from './cardInfo.jsx';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.css";

function MainCardInfo() {
  
  let [cardData, setCardData] = useState([]);
  let [count, setCount] = useState(0);    
  let output = cardData[count];

  useEffect(()=>{
    fetch("rewiesData.json")
    .then(resData=>resData.json())
    .then((res)=>{
      setCardData(res.map(cd => <CardInfo key = {cd.id} fullName = {cd.name} role = {cd.role} bio = {cd.bio} img = {cd.img} />));
    } );

    console.log(<CardInfo/>);
  },[]);

  let right = () =>{
    setCount(count + 1);
    if(count == cardData.length - 1){
      setCount(0);
    }

  }

  let left = () =>{
    setCount(count - 1);
    if(count == 0){
      setCount(cardData.length - 1);
    }

  }

  let random = () =>{
    setCount(Math.floor(Math.random() * cardData.length));
  }


  
  return (    
      <div id = {style.mainCard}>
      <div className="card text-center p-0" style={{width:"550px"}}>
        <div className="card-body align-self-center">
          { output }
          
          <div className={style.reviewsButtons}>
            <button src= "#" onClick={left} className="btn btn-primary float-left"><FaArrowLeft /></button>
            <button href="#" onClick={right} className="btn btn-primary float-right"><FaArrowRight/></button>
          </div>
          <a className={style.randomButton} onClick={random}>Surprise me</a>
        </div>
      </div>
      </div>
        
    
  )
}

export default MainCardInfo