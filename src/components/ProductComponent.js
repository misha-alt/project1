import React, { useEffect, useState } from 'react'
import { createProduct, getProduct, updateProduct } from '../service/ProductService'
import { useNavigate, useParams } from 'react-router-dom'

const ProductComponent = () => {
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')


  const {id} = useParams();
    const [errors, setErrors]=useState({
    description: '',
    price: '',
    city: ''

  })


 const navigator = useNavigate()


 useEffect(()=>{
    if(id){
      getProduct(id).then((responce)=>{
        setDescription(responce.data.description);
        setPrice(responce.data.price);
        setCity(responce.data.city);
      }).catch(error=>{
        console.error(error);
      })
    }
 }, [id])

  
  
  function saveOrUpdateProduct(e){
    e.preventDefault();

    const product = {description, price, city}
    console.log(product)

    if (validateForm()){

      if(id){
        updateProduct(id, product).then((responce)=>{
          console.log(responce.data);
          navigator('/product');
        }).catch(error=>{
          console.error(error);
        })
      }else{
        createProduct(product).then((responce)=>{
          console.log(responce.data);
          navigator('/product');
        }).catch(error=>{
          console.error(error);
        })
      }

    }

    
  }

function validateForm(){
  let valid = true;
  const errorsCopy = {... errors}

  if(description.trim()){
    errorsCopy.description = '';
  }else{
    errorsCopy.description = 'descriprion is required';
    valid = false;
  }
// =======================================

if (typeof price === 'string' && price.trim()) {
  const numericPrice = parseInt(price, 10);

  if (!isNaN(numericPrice)) {
    errorsCopy.price = '';
  } else {
      console.error('Price must be a valid number');
  }
} else {
  errorsCopy.price = 'price is required';
    valid = false;
}

  // if(price.trim()){
  //   errorsCopy.price = '';
    
  // }else{
  //   errorsCopy.price = 'price is required';
  //   valid = false;
  // }
  // =================================

  if(city.trim()){
    errorsCopy.city = '';
  }else{
    errorsCopy.city = 'city is required';
    valid = false;
  }

  setErrors(errorsCopy);
  return valid;

}

function pageTitile(){

  if(id){
    return    <h2 className='text-center'>Update product</h2>
  }else{
   return <h2 className='text-center'>Add product</h2>
  }
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitile()
          }
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <lable className='form-lable'>description</lable>
                    <textarea type='text'
                           placeholder='Enter product description' 
                           name='name of product' 
                           value={description} 
                           className={`form-control is ${errors.description ? 'is-invalid': ''}`}
                           onChange={(e)=>setDescription(e.target.value)}>
                    </textarea>    
                    {errors.description && <div className='invalid-feedback'>{errors.description}</div>}    
                </div>

                <div className='form-group mb-2'>
                  <lable className='form-lable'>price</lable>
                    <input type='text'
                           placeholder='Enter product price' 
                           name='name of product' 
                           value={price} 
                           className={`form-control is ${errors.price ? 'is-invalid': ''}`}
                           onChange={(e)=>setPrice(e.target.value)}>
                    </input>
                    {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                </div>

                
                <div className='form-group mb-2'>
                  <lable className='form-lable'>city</lable>
                    <input type='text'
                           placeholder='Enter city' 
                           name='name of city' 
                           value={city} 
                           className={`form-control is ${errors.city ? 'is-invalid': ''}`}
                           onChange={(e)=>setCity(e.target.value)}>
                    </input>
                    {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                </div>

                <button type="button" className='btn btn-success' onClick={saveOrUpdateProduct} >Submit</button>

              </form>

            </div>
        </div>
      </div>

    </div>
  )
}

export default ProductComponent