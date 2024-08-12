import React, { useState } from 'react'
import { createProduct } from '../service/ProductService'
import { useNavigate } from 'react-router-dom'

const ProductComponent = () => {
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')

  const [errors, setErrors]=useState({
    description: '',
    price: '',
    city: ''

  })


 const navigator = useNavigate()

  
  
  function saveProduct(e){
    e.preventDefault();


    if (validateForm()){
      const product = {description, price, city}
    console.log(product)

    createProduct(product).then((responce)=>{
      console.log(responce.data);
      navigator('/product')
    })
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

  if(price.trim()){
    errorsCopy.price = '';
  }else{
    errorsCopy.price = 'price is required';
    valid = false;
  }

  if(city.trim()){
    errorsCopy.city = '';
  }else{
    errorsCopy.city = 'city is required';
    valid = false;
  }

  setErrors(errorsCopy);
  return valid;

}

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add product</h2>
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <lable className='form-lable'>description</lable>
                    <input type='text'
                           placeholder='Enter product description' 
                           name='name of product' 
                           value={description} 
                           className={`form-control is ${errors.description ? 'is-invalid': ''}`}
                           onChange={(e)=>setDescription(e.target.value)}>
                    </input>    
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

                <button type="button" className='btn btn-success' onClick={saveProduct} >Submit</button>

              </form>

            </div>
        </div>
      </div>

    </div>
  )
}

export default ProductComponent