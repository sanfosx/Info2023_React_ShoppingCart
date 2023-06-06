
// eslint-disable-next-line react/prop-types
const ListComponent = ({ products }) => {
  return (
    <main>
      <h2>Listado de Productos</h2>
      <ul>
        
        {// eslint-disable-next-line react/prop-types
        products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListComponent;
