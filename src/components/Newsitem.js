import React from 'react'

export default function Newsitem(props) {
  return (
      
    <div>
<div class="card" >
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <a href={props.news}class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
  )
}
