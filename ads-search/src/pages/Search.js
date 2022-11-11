import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import AdBlock from '../components/AdBlock'
function Search() {
    const [keyword, setKeyword]= useState("")
    const [ads, setAds]=useState([])
  useEffect(()=>{
   
 Axios.get(`http://localhost:3001/ads/${keyword}`).then(
  (response)=>{
    console.log(response.data.length)
    setAds(response.data)
  }
 ).catch((err)=>{console.log(err)})
 

    },[keyword])
  return (
    <div>
    <div className='row gx-0 p-3 justify-content-center' style={{backgroundColor:"#7f41e3"}}>
       <input type="text" className='form-control w-50 col-9' placeholder='Enter the keyword.....' onChange={(e)=>{ setKeyword(e.target.value)}}/> 
       <button type="" className='btn col-2 overflow-clipped ms-1' style={{backgroundColor:"#4d6a5c"}}><i className="bi bi-search" style={{color:"white"}}></i></button>
    </div>
<div className='ads-parent row gx-0 p-2 justify-content-center'>
    
{
  ads.map((element)=>{
    return <AdBlock element={element} key={element._id}/>
})
}   
{
  ads.length===0? <div className='text-center'>
    <h3>No match :(</h3>
  </div>:null
}




</div>

    </div>
  )
}

export default Search