import React,{useState} from 'react'
import Noteitem from '../components/Noteitem'
export default  function Form()
{ const [note,setnote]=useState({title:"", description:"" , tag:"default"})
    
    const onchange=(e)=>{
setnote({...note, [e.target.name]:[e.target.value]})
}
const handleclick=()=>{
    <div className="row my-4">
    <Noteitem note={note}/>
</div>
}
    return(
        <div>
<form>
  <div className="mb-3">
    <label for="exampleInputTtile1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputTitle1" name="Title" aria-describedby="emailHelp" onChange={onchange}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputDescription" className="form-label">Description</label>
    <input type="text" className="form-control" name="Description" id="exampleInputDescription" onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputtag1" className="form-label">Tag</label>
    <input type="text" className="form-control" name="Tag" id="exampleInputTag1" onChange={onchange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
</form>



</div>

)}