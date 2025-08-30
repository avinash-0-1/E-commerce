import { useState , useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import Header from '../../components/Header'
import ProductsGrid from './ProductsGrid'

function Home({cart , LoadCart}) { 
const [products, setProducts] = useState([]);

useEffect(()=>{
  const productData = async()=>{
    const response = await axios.get('/api/products')
    setProducts(response.data);
  }
  productData();
},[])

  return (
    <>
      <title>E-Commerce Home</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} LoadCart={LoadCart} />
      </div>
    </>
  )
}

export default Home