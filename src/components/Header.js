import image from './img/deya.jpg'
function Header(){
    return <div className="header-area">
        <div className="header">
        <div className="head-title">
            <h2>This is my First Web by React</h2>
            <p>Hey there,I am deya roy.this is a simple and short description about me.Hey there,I am deya roy.this is a simple and short description about meHey there,I am deya roy.this is a simple and short description about me</p>
            <button className="btn btn-primary">More</button>
        </div>
        <div className="head-img">
            <img src={image}/>
        </div>
    </div>
    </div>
}
export default Header;