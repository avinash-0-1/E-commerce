import Product from './Product';

function ProductsGrid({ products, LoadCart }) {

    return (
        <div className="products-grid">
            {products.map((product) => {

                return (
                    <Product key={product.id} product={product} LoadCart={LoadCart} />
                );
            })}
        </div>
    )
}

export default ProductsGrid