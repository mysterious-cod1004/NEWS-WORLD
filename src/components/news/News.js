import React, { useState,useEffect } from 'react';
import "./News.css";

const News = () => {
    const [mynews,setMyNews]=useState([]);

    const fetchData = async ()=>{
        let response= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=839e97aeeca64c8dac4905987b5f37c8");
        let data= await response.json();
        setMyNews(data.articles);
    }

    useEffect(()=>{
       fetchData();
    },[]);

  return (
    <>
<div className="maindiv">
    {mynews.map((ele)=>{
            console.log(ele);
            return(
                <>

    <div className="card" style={{width: "320px", height:"400px" ,marginLeft:"6rem" ,marginTop:"2rem"}}>
  <img src={ele.urlToImage==null ? "https://image.cnbcfm.com/api/v1/image/108004073-1720634808413-gettyimages-2149301028-DIMON_ECONOMIC_CLUB.jpeg?v=1720634872&w=1920&h=1080":ele.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ele.author}</h5>
    <p className="card-text">{ele.title}</p>
    <a href={ele.url} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
                </>
            )
        })
    }
         </div>
    </>

  )
}

export default News
