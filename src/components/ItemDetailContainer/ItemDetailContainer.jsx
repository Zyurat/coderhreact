import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../helper/gFetch'
import ItemCount from '../ItemCount/ItemCount'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})

    const {productId} = useParams()

    useEffect(()=>{
        gFetch()
        .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
        .catch(err=> console.log(err))
    })
    console.log('product', product)
    return (
        <div className="container border border-3 border-primary rounded">
            <div className="row"> 
                <div classname="col">
                    <img className="w-50" src={product.picture} alt='Foto producto'/>
                    <h3>nombre: {product.name}</h3>
                    <h3>categoria: {product.category}</h3>
                    <h3>precio: {product.price}</h3>
                </div>
                <div classname="col">
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}


export default ItemDetailContainer
