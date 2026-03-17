import React from 'react'
import discount1 from './images/discount1.jpg'
import discount2 from './images/discount2.jpg'
import discount3 from './images/discount4.jpg'
import "./Home.css";

function Home() {
  const imgStyle = { height: "400px", objectFit: "cover" };

  return (
    <>
      {/* 🔹 Carousel */}
      <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
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

      {/* 🔹 Categories */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5>Men</h5>
              <p>Trendy and stylish outfits</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5>Women</h5>
              <p>Latest fashion collections</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5>Kids</h5>
              <p>Cute & comfortable styles</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Featured Products */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {[1, 2, 3, 4].map((item) => (
            <div className="col-md-3" key={item}>
              <div className="card shadow-sm">
                <img src={discount1} className="card-img-top" alt="product" />
                <div className="card-body text-center">
                  <h5>Product Name</h5>
                  <p>₹999</p>
                  <button className="btn btn-dark btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Offer Banner */}
      <div className="bg-dark text-white text-center p-5 my-5">
        <h2>🔥 Mega Sale is Live!</h2>
        <p>Up to 50% OFF on all products</p>
        <button className="btn btn-light">Shop Now</button>
      </div>

      {/* 🔹 Why Choose Us */}
      <div className="container my-5 text-center">
        <h2 className="mb-4">Why Choose Us</h2>
        <div className="row">
          <div className="col-md-4">
            <h5>🚚 Free Delivery</h5>
            <p>On all orders above ₹499</p>
          </div>
          <div className="col-md-4">
            <h5>💳 Secure Payment</h5>
            <p>100% safe transactions</p>
          </div>
          <div className="col-md-4">
            <h5>🔄 Easy Returns</h5>
            <p>7-day return policy</p>
          </div>
        </div>
      </div>

      {/* 🔹 Footer */}
      <div className="bg-dark text-white text-center p-3">
        <p>© 2026 YourStore | All Rights Reserved</p>
      </div>
    </>
  )
}

export default Home;