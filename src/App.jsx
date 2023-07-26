import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/navbar/Item'
import Card from './components/catalogo/ItemListContainer';
import Details from './components/detalle/ItemDetails.Container';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [showDetails, setShowDetails] = useState(false);
  const [productDetails, setProductDetail] = useState(null);

  const onShowDetails = (id) =>{
    setShowDetails(true);
    const findProduct = products.find((product) => product.id===id);
    setProductDetail(findProduct);
  }

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
      <div className='inputContainer'>
      {showDetails ?(
        <>
         <Details {...productDetails}/>
          </>
          ) : (
            <div className='card-container'>
      {
      products.map((product) => (
        <Card {...product} onShowDetails={onShowDetails}/>
        )
        )
      }
      //routing y navegación
      <Routes >  
        <Route path='/' element={<catalogo />}/>
        <Route path='/category/:categoryId' element={<Card/>}/>
        <Route path='/item/:itemId' element={<productDetails/>}/>
        
      </Routes>
      </div>
          )}
   
      </div>
     </div> 
   
  )
}

export default App;