import { Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemDetailContainer = ({ product }) => {return (
    <div className="row">
        <h1>ItemDetailContainer</h1>
        <div className="col-6">
            <centecdr>
                <img src={`${product.picture}`} />
                <p>{`${product.name}`}</p>
                <p>{`${product.price}`}`</p>
                <p>{`${product.stock}`}`</p>
                {/* <button onClick={()=> onAdd()}>Agregar al carrito</button> */}
            </centecdr>
            
            
        </div>

            <div className="col-6 mt-5">
                    <center>
                    {
                        isCount ?
                            <ItemCount onAdd={onAdd} stock={10} init={1} />
                        :
                            <div>
                                    <Link to="/cart">
                                        <button className="btn btn-primary">Terminar Compra</button>
                                    </Link>
                                    <Link to="/">
                                        <button className="btn btn-primary">Seguir Comprando</button>
                                    </Link>
                            </div>


                    }   
                    
                </center >
            </div>
            
            
    </div>
)
}

export default ItemDetailContainer
