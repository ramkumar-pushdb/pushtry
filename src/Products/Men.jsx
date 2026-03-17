import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Men() {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get("https://pushtry-backend.onrender.com/products")
      setProducts(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const menProducts = products.filter(item => item.category === "men")

  return (
    <div className="container my-4">
      <div className="row">
        {menProducts.length > 0 ? (
          menProducts.map((item) => (
            <div className="col-md-3 mb-4" key={item._id}>
              <div className="card h-100 shadow-sm">

                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>

                <div className="card-footer text-center">
                  <strong>${item.price.toFixed(2)}</strong>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  )
}

export default Men