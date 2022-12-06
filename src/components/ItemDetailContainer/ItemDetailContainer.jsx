import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../helper/gFetch'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function ItemDetailContainer(product) {
    const {id} =useParams()

    useEffect(()=> {
        gFetch()
            .then(resolve => setProduct(resolve.find(product => product.id == id)))
            .catch(fail => console.log(fail))
            .finally(() => setLoading(false))
    })
    return(
    <div className="row">
    <h1>Detalles del producto</h1>
    <div className="col-6">
            <img src={product.picture}/>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.stock}</span>
    </div>

        
        
        
</div>)

}

export default ItemDetailContainer
