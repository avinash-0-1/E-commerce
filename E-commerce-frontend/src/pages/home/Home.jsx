import { useState , useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import Header from '../../components/Header'
import ProductsGrid from './ProductsGrid'

function Home({cart}) { 
const [products, setProducts] = useState([]);

useEffect(()=>{
  axios.get('/api/products')
  .then((response)=>{
    setProducts(response.data); 
  })
},[])

  return (
    <>
      <title>E-Commerce Home</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  )
}

export default Home