import { useState, useEffect } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

// eslint-disable-next-line react/prop-types
const ListComponent = ({ products }) => {
  const [productQuantity, setProductQuantity] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);

  // Incrementar la cantidad del producto
  const incrementQuantity = (productId) => {
    setProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 1) + 1,
    }));
  };

  // Decrementar la cantidad del producto
  const decrementQuantity = (productId) => {
    setProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 1) - 1, 1),
    }));
  };

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setShoppingCart((prevCart) => [
      ...prevCart,
      { ...product, cant: productQuantity[product.id] || 1 },
    ]);
  };

  // Remover un producto del carrito
  const removeFromCart = (productId) => {
    setShoppingCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    // Obtener los datos del carrito desde localStorage al cargar el componente
    const cartData = localStorage.getItem('shoppingCart');
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      setShoppingCart(parsedCart);

      // Actualizar la cantidad de productos en el estado
      const updatedQuantity = parsedCart.reduce((quantityObj, item) => {
        return {
          ...quantityObj,
          [item.id]: item.cant || 1,
        };
      }, {});
      setProductQuantity(updatedQuantity);
    }
  }, []);

  useEffect(() => {
    // Guardar el carrito en localStorage cuando se actualiza
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  // Calcular el precio total del carrito
  const totalPrice = shoppingCart.reduce((total, item) => {
    return total + item.price * item.cant;
  }, 0);

  /* Calcular la cantidad total de productos en el carrito
  const totalQuantity = shoppingCart.reduce((total, item) => {
    return total + (item.cant || 0);
  }, 0);*/

  return (
    <div className="list-container">
      <div className="list-tittle">
        <h1>Listado de Productos</h1>
        <div className="cart-info">
          <button>
            <RiShoppingCartLine />
          </button>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div className="list-content">
        {/*eslint-disable-next-line react/prop-types*/}
        {products.map((product) => {
          const inCart = shoppingCart.some((item) => item.id === product.id);

          return (
            <div className={`card-content borderes ${inCart ? 'in-cart' : ''}`} key={product.id}>
              {inCart ? (
                // Mostrar la información del producto en el carrito
                <>
                  <h2>{product.name}</h2>
                  {productQuantity[product.id] > 1 ? (
                    <h3>{`${productQuantity[product.id]} x ${product.price} = ${productQuantity[product.id] * product.price}`}</h3>
                  ) : (
                    <h3>{`$ ${product.price}`}</h3>
                  )}
                  <button className="btn-add borderes" onClick={() => removeFromCart(product.id)}>
                    Quitar del carrito
                  </button>
                </>
              ) : (
                // Mostrar la información del producto no agregado al carrito
                <>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <h2>$ {product.price}</h2>
                  <div className="btn-logic">
                    <button onClick={() => decrementQuantity(product.id)}>-</button>
                    {productQuantity[product.id] ? productQuantity[product.id] : 1}
                    <button onClick={() => incrementQuantity(product.id)}>+</button>
                  </div>
                  <button className="btn-add borderes" onClick={() => addToCart(product)}>
                    Lo quiero
                  </button>
                </>
              )}

              {inCart && (
                <button className="btn-remove" onClick={() => removeFromCart(product.id)}>
                  Quitar del carrito
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListComponent;

