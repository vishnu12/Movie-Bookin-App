import React from 'react'

const SideMenu = () => {

let array=[0,1,2,3,6]

const Widget=({head,type})=>{
    return (
        <div className="card w-95 mb-1">
  <div className="card-body" >
    <h5 className="card-title">{head}</h5>
    <p className="card-text">{type}</p>
  </div>
</div>

    )
}

  return (
    <>
     <h4 className='mt-5 text-center'>Trending Searches</h4> 
     {
         array.map((d,i)=>{
             return <Widget head='Master' type='Movies' key={i}/>
         })
     }
    </>
  )
}

export default SideMenu
