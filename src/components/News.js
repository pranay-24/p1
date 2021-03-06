import { useEffect, useState } from "react"
import React from 'react'
import Newsitem from "./Newsitem"
import { matchRoutes } from "react-router-dom";

export default function News() {
  let [data,setdata]=useState({articles:[], totalarticles:0 , page:1})

  useEffect(()=>{
      let url = "https://newsapi.org/v2/everything?q=keyword&apiKey=fdd188becfcf47eea0eb3e967d949e5c&page=1&pagesize=4"
         fetch(url)
     .then(response=>response.json())
     .then(pdata=>{
      setdata({articles: pdata.articles, totalarticles:pdata.totalResults})
         }
    
      )
      console.log(data.articles)    
  },)

  const handlenextclick = async()=>{
    if(data.page+1 < Math.ceil(data.totalarticles/4))
    {
      let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=fdd188becfcf47eea0eb3e967d949e5c=${data.page-1}`
      fetch(url)
      .then(response=>response.json())
      .then(pdata=>{console.log(pdata)
      setdata({articles:data.articles, page:data.page+1})}
      )
        

  }
}

  const handleprevclick = async()=>{
   
    let url= `https://newsapi.org/v2/everything?q=keyword&apiKey=fdd188becfcf47eea0eb3e967d949e5c&page=${data.page-1}`
    fetch(url)
      .then(response=>response.json())
      .then(pdata=>{console.log(pdata)
        setdata({articles:data.articles, page:data.page+1})
      })
   
}
    return (
            <div>
                <h1 className="container d-flex justify-content-center">NewsMonkey-Top Headlines</h1>
        <div className="row">

         {
         
        data.articles.map((element)=>{
            return(
        <div className="col-md-4" key={element.url} >
        <Newsitem title={element.title} img={element.urlToImage}  description={element.description} news={element.url} />
       </div>);
        })
        }
        </div>
        <button type="button" className="btn btn-primary" onClick={handleprevclick}>Prev</button>
        <button type="button" className="btn btn-primary" onClick={handlenextclick}>Next</button>
        </div>

  )
}
