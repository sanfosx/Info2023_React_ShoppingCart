import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const FormComponent =({ addProduct}) => {

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Generar un ID único para el producto
        const productId = Date.now().toString();

        // Crear un objeto con los datos del producto
        const newProduct = {
            id: productId,
            name: productName,
            description: productDescription,
            price: productPrice,
        };

        // Llamar a la función de agregar producto del componente padre
        addProduct(newProduct);

        // Limpiar los campos del formulario
        setProductName('');
        setProductDescription('');
        setProductPrice('');
    };

    return (
        <div className="form-container">
            <h2>Cargar Productos</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-input">
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                    <label htmlFor="productName" className="form-label">
                        Nombre:
                    </label>
                </div>

                <div className="form-input">
                    <input
                        type="text"
                        id="productDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required
                    />
                    <label htmlFor="productDescription" className="form-label">
                        Descripción:
                    </label>
                </div>

                <div className="form-input">
                    <input
                        type="number"
                        id="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                    <label htmlFor="productPrice" className="form-label">
                        Precio:
                    </label>
                </div>

                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    )
}

export default FormComponent
