import React, { useEffect, useState } from 'react'
import { listProduct } from '../service/ProductService'
import { useNavigate } from 'react-router-dom'


   const ListProductComponents = () => {

const [product, setProduct] = useState([])

const navigator = useNavigate();

useEffect(()=>{

    listProduct().then((response)=>{
        setProduct(response.data);
        }).catch(error=>{
            console.error(error);

        })

},[])
function addProduct (){
    navigator('/add-product')
}

function updateProduct(id){
    navigator(`/productUpdate/${id}`)
}
 
  return (
    <div className='container'>
        <button className='btn btn-primary mb-2' onClick={addProduct}>Add product</button>
        <table className='table table-striped table-border'>
            <thead>
                <tr>
                    <th>Product id</th>
                    <th>Product description</th>
                    <th>Product price</th>
                    <th>Product city</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(product =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.city}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateProduct(product.id)}>Update</button>
                            </td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListProductComponents