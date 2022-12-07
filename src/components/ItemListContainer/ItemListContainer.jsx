import React, { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../helper/gFetch";
import { Link } from 'react-router-dom'

//* .then 

const ItemListContainer = ({ greeting }) => {
  const [products, setProduct] = useState ([])
  const [loading, setLoading] = useState (true)
  useEffect(()=>{
    gFetch()
    .then(respuesta => setProduct(respuesta))
    .catch(rechazado => console.log(rechazado))
    .finally(()=> setLoading(false))
  }, [])
  return (
      <section className="ItemListContainer">
        {   loading ? 
                  <h1>Cargando...</h1> 
              :
                  products.map( product =>    <div            
                                                  style={{ marginLeft: 100}}
                                                  className='col-md-3'
                                                  key={product.id}
                                              >    
                                                  <div 
                                                  className="card w-100 mt-5" 
                                                  >
                                                    <div 
                                                    className="card-header"
                                                    >
                                                      {`${product.name} - ${product.category}`}
                                                      </div>
                                                      <div className="card-body">
                                                          <img src={product.picture} alt='' className='w-100' /> <br/>
                                                          <span>Precio: {product.price}</span> <br/>
                                                          <span>Stock:  {product.stock}</span>                                                         
                                                      </div>
                                              
                                                      <div className="card-footer">   
                                                        <Link to={`/detail/${product.id}`}>
                                                          <button className="btn btn-outline-primary btn-block">
                                                            <span>Detalles</span>
                                                          </button>
                                                        </Link>                                                    
                                                      </div>
                                                  </div>
                                                  
                                              </div> 
                      ) 
          }            
      
      </section>
  )
}



export default ItemListContainer;
