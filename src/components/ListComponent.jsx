import { useState } from "react"
import { RiShoppingCartLine } from 'react-icons/ri';





// eslint-disable-next-line react/prop-types
const ListComponent = ({ products }) => {

  



  return (
    <div className="list-container">
      <div className="list-tittle">
        <h1>Listado de Productos</h1>
        <div className="cart-info">
          <button> <RiShoppingCartLine /></button>
          <p>$2600</p>
        </div>
      </div>
      <div className="list-content">

        {// eslint-disable-next-line react/prop-types
          products.map((product) => (
            <div className="card-content borderes" key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h2>$ {product.price}</h2>
              <div className="btn-logic">
                <button>-</button>
                <p> {product.cant} </p>
                <button>+</button>
              </div>
              <button className="btn-add borderes" >Lo quiero</button>
            </div>
          ))}

      </div>
    </div>
  );
};

export default ListComponent;


