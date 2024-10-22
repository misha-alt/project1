import React, { useEffect, useState } from 'react'
import { deleteProduct, listProduct } from '../service/ProductService'
import { useNavigate } from 'react-router-dom'


   const ListProductComponents = () => {

const [product, setProduct] = useState([])

const navigator = useNavigate();

useEffect(()=>{
    getAllProducts();

},[])
function getAllProducts(){

    listProduct().then((responce)=>{
        setProduct(responce.data);
        }).catch(error=>{
            console.error(error);

        })
}

function addProduct (){
    navigator('/add-product')
}

function updateProduct(id){
    navigator(`/productUpdate/${id}`)
}

function removeProduct(id){
  
    console.log(id);

    deleteProduct(id).then((responce)=>{
        getAllProducts();
    }).catch(error=>{
        console.log(error);

    })
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
                                <button className='btn btn-danger' onClick={()=>removeProduct(product.id)}
                                    style={{marginLeft:'10px'}}
                                    >Delete</button>
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