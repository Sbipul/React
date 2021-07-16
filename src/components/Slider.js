import imageA from './img/a.jpg'
import imageB from './img/b.jpg'
import imageC from './img/c.jpg'
function Slider(){
  return <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imageA} class="d-block w-100" alt="..."/>
      <div className="info-area">
        <div className="all-info">
            <h1><span>Helena</span> Medical College</h1>
            <p>The present campus of the College has an area of about 9 acres of land. The college and all preclinical and para-clinical departments are located in the academic building.</p>
            <button className="btn bg-primary text-light">More info</button>
        </div>
    </div>
    </div>
    <div className="carousel-item">
      <img src={imageB} class="d-block w-100" alt="..."/>
      <div className="info-area">
        <div className="all-info">
            <h1><span>Best</span> institute for a Medical student</h1>
            <p>The present campus of the College has an area of about 9 acres of land. The college and all preclinical and para-clinical departments are located in the academic building.</p>
            <button className="btn bg-primary text-light">More info</button>
        </div>
    </div>
    </div>
    <div className="carousel-item">
      <img src={imageC} className="d-block w-100" alt="..."/>
      <div className="info-area">
        <div className="all-info">
            <h1><span>Visit</span> our CAMPUS</h1>
            <p>The present campus of the College has an area of about 9 acres of land. The college and all preclinical and para-clinical departments are located in the academic building.</p>
            <button className="btn bg-primary text-light">More info</button>
        </div>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                   
}
export default Slider;