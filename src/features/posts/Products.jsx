import React, { useState } from 'react'
import { useDeleteProductsMutation, useGetProductsQuery } from './ApiSlice'
import "./Products.scss"
import { Link } from 'react-router-dom'
import ProductsModal from '../../components/ProductsModal'
const Products = () => {
  const {data: products} = useGetProductsQuery()
  const [deleteProduct] = useDeleteProductsMutation()
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState("")
  const toggle = () => {
    setModal(false);
    setEdit('')
  };
  const editProduct =(item)=> {
    setEdit(item)
    setModal(true)
  }
  return (
    <div className='products'>
      <ProductsModal open={modal} toggle={toggle} edit={edit}/>
      <button className='btn btn-success' onClick={()=>setModal(true)}>Add+</button>
      <h1 className='title'>Products</h1>
      <div className="product__cards">
        {
          products?.map((item,index)=> {
            return <div className="product__card" key={index}>
            <div className="product__card-top">
            <h1 className='card__title'>{item.brand}</h1>
            </div>
            <hr />
            <div className="card__body">
              <h1 className='card__name'>{item.name}</h1>
              <h3>Price: ${item.price}</h3>
              <div className="action d-flex w-100">
                <button className='btn btn-info w-50 text-light' onClick={()=>editProduct(item)}>edit</button>
                <button className='btn btn-danger w-50' onClick={()=>deleteProduct(item.id)}>delete</button>
              </div>
              <Link to={`/single__product/${item.id}`} className="btn btn-outline-primary w-100" >View more</Link>
            </div>
          </div>
          })
        }
      </div>
    </div>
  )
}

export default Products
