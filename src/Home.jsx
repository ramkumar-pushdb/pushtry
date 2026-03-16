import React from 'react'
import discount1 from './images/discount1.jpg'
import discount2 from './images/discount2.jpg'
import discount3 from './images/discount4.jpg'
import "./Home.css";

function Home() {
  const imgStyle = { height: "400px", objectFit: "cover" };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        
        <div style={{ width: "60%", maxWidth: "800px", minWidth: "300px" }}>
          <div id="carouselExampleIndicators" className="carousel slide">

            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner rounded shadow">
              <div className="carousel-item active">
                <img src={discount1} className="d-block w-100" style={imgStyle} alt="discount1" />
              </div>
              <div className="carousel-item">
                <img src={discount2} className="d-block w-100" style={imgStyle} alt="discount2" />
              </div>
              <div className="carousel-item">
                <img src={discount3} className="d-block w-100" style={imgStyle} alt="discount3" />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default Home;