import { useState , useEffect } from 'react'
import { useSearchParams } from 'react-router'
import axios from 'axios'
import ProductsGrid from './ProductsGrid'
import Header from '../../components/Header'
import './Home.css'

function Home({cart , LoadCart}) { 
const [products, setProducts] = useState([]);

const [searchParams] = useSearchParams()
const search = searchParams.get('search');

useEffect(()=>{
  const productData = async()=>{
    const url = search ? `/api/products/?search=${search}` : '/api/products'
    const response = await axios.get(encodeURIComponent(url))
    setProducts(response.data);
  }
  productData();
},[search])

window.axios = axios;

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