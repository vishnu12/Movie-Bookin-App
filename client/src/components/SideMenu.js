import React from 'react'

const SideMenu = () => {

let array=[0,1,2,3,6]

let data=[
  {
  name:'Master',
  type:'Movies'
},
{
  name:'Dryshyam2',
  type:'Movies'
},
{
  name:'Soorarai Potru',
  type:'Movies'
},
{
  name:'99 Songs',
  type:'Movies'
},
{
  name:'Race',
  type:'Movies'
}
]

const Widget=({head,type})=>{
    return (
        <div className="card widget-card w-95 mb-1 text-center">
  <div className="card-body" >
    <h5 className="card-title" style={{fontSize:'25px'}}>{head}</h5>
    <p className="card-text">{type}</p>
  </div>
</div>

    )
}

  return (
    <>
     <h4 className='mt-5 text-center' style={{fontWeight:'bold'}}>Trending Searches</h4> 
     {
         data.map((d,i)=>{
             return <Widget head={d.name} type={d.type} key={i}/>
         })
     }
    </>
  )
}

export default SideMenu
