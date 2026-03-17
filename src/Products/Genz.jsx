import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'


function Genz() {
    const [products, setProducts] = useState([])
    const [genz, setGenz] = useState([])


    const fetchData = async () => {
        try {
            const res = await axios.get("https://pushtry-backend.onrender.com/products")
             
            setProducts(res.data)

        } catch (err) {
            console.error(err)
        }
        finally {   
            console.log(products)
        }
    }

    

    

    useEffect(() => {
    
        fetchData()
        
    }, [])
    const genzProducts = products.filter(item => item.category === "gen-z")

  
    
  return (
    <div>
            {genzProducts.length > 0 ? (
                genzProducts.map((item) => (


                    <div className="card"  style={{ width: '20rem' }} key={item._id}>
                        <div className="card-body">
                            <img src={item.image} alt={item.name} className="card-img-top" />
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">${item.price.toFixed(2)}</li>
                        </ul>
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>

        
  
  )
}

export default Genz