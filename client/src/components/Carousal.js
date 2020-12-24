import React from 'react'

const Carousal = () => {
  return (
    <section className='carousel'>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://in.bmscdn.com/showcaseimage/eventimage/danceworx-online-classes-12-09-2020-08-13-38-465.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://in.bmscdn.com/showcaseimage/eventimage/danceworx-online-classes-12-09-2020-08-13-38-465.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://in.bmscdn.com/showcaseimage/eventimage/night-stay-on-yacht-25-09-2020-08-52-28-988.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</section>
  )
}

export default Carousal
