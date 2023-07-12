import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/navbar'
import Card from './components/producto';
import { Route, Routes } from 'react-router-dom';

function App() {

//ciclos de vida, promises, asincronía

const [products, setProducts] = useState([]);

useEffect(() => {
  const getProduct = async () => {
    try{
      const response = await fetch('https://64a89377dca581464b85e1d1.mockapi.io/products',{
        method: 'GET',
        headers: {
          'Content-Type': 'Application/jason',
        },
      });
      const data = await response.json();
      setProducts(data);

    } catch (error) {
      console.log(error);

    }
  }
  getProduct();
}, [])


console.log({products});
  return (
    <div>
      <Header logo="Tienda Shops"/>
      <div className='card-container'>
      {
      products.map((product) => (
        <Card {...product}/>
        )
        )
      }
      //routing y navegación
      <Routes >  
        <Route path='/' element={<producto />}/>
      </Routes>
      </div>
   
    </div>
   
  )
}

export default App;