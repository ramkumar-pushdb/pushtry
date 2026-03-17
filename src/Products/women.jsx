// import React from 'react'
// import { useEffect,useState } from 'react'
// import axios from 'axios'


// function Women() {
//     const [products, setProducts] = useState([])
//     const [women, setWomen] = useState([])


//     const fetchData = async () => {
//         try {
//             const res = await axios.get("http://localhost:5050/products")
             
//             setProducts(res.data)

//         } catch (err) {
//             console.error(err)
//         }
//         finally {   
//             console.log(products)
//         }
//     }

    

    

//     useEffect(() => {
        
//         fetchData()
        
//     }, [])
//     const womenProducts = products.filter(item => item.category === "women")

  
    
//   return (
//     <div>
//             {womenProducts.length > 0 ? (
//                 womenProducts.map((item) => (


//                     <div className="card"  style={{ width: '20rem' }} key={item._id}>
//                         <div className="card-body">
//                             <img src={item.image} alt={item.name} className="card-img-top" />
//                             <h5 className="card-title">{item.name}</h5>
//                             <p className="card-text">{item.description}</p>
//                         </div>
//                         <ul className="list-group list-group-flush">
//                             <li className="list-group-item">${item.price.toFixed(2)}</li>
//                         </ul>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading products...</p>
//             )}
//         </div>

        
  
//   )
// }

// export default Women