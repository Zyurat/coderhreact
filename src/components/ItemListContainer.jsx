import React, { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "./helper/gFetch";
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

  const [count, cambiarValorCount] = useState (0)
  const handleContador = () => {
    cambiarValorCount(count+1)
  }
  return (
      <div>
        {loading ? <h1>Cargando</h1> :
        products.map(product=><li key={product.id}>{product.name}</li>)}
        <p className="alert alert-danger">{count}</p>
        <p className='btn btn-outline-primary' onClick={handleContador}>Clickeame!</p>
        <h2>{greeting}</h2>
      </div>
  );
;
}

export default ItemListContainer;
