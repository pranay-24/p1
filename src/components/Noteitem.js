import React from 'react'

export default function Noteitem(props) {
  return (
    <div>
        <div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">{props.note.title}</h5>
    <p className="card-text">{props.note.description}</p>
    <h5 className="card-tag">{props.note.tag}</h5>
  </div>
</div>
    </div>
    
  )
}
