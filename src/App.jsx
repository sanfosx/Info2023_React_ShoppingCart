import { useState, useEffect } from 'react'
import './App.css'
import FormComponent from './components/FormComponent'
import ListComponent from './components/ListComponent'


function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    // Agregar el nuevo producto a la lista
    setProducts([...products, newProduct]);

    // Guardar en memoria local
    const productsData = localStorage.getItem('products');
    let updatedProducts = [];
    if (productsData) {
      updatedProducts = JSON.parse(productsData);
    }
    updatedProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };


  useEffect(() => {
    const productsData = localStorage.getItem('products');
    if (productsData) {
      const parsedProducts = JSON.parse(productsData);
      setProducts(parsedProducts);
    }
  }, []);


  return (
    <div className="app-container borderes">
      <aside className="borderes">
       <FormComponent addProduct={addProduct}/>
      </aside>
      <main className="borderes">
       <ListComponent products={products}/>
      </main>
    </div>
  )
}

export default App
