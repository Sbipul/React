import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
function Card(){
return <div className="card-area bg-primary">
  <div className="card-group">
<div className="card">
  <img src={image1} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div className="card">
  <img src={image2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div className="card">
  <img src={image3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
</div>
}
export default Card;