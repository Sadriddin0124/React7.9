import React, { useState } from 'react'
import { useDeleteBrandsMutation, useGetBrandsQuery } from '../features/posts/ApiSlice'
import BrandsModal from './BrandsModal'

const Brands = () => {
    const {data: brands} = useGetBrandsQuery()
    const [brandsModal, setBrandsModal] = useState(false)
    const [brandItem, setBrandItem] = useState('')
    const [deleteBrand] = useDeleteBrandsMutation()
    const closeBrand =()=> {
        setBrandsModal(false)
        setBrandItem('')
    }
    const editBrand =(item)=> {
        setBrandItem(item)
        setBrandsModal(true)
    }
  return (
    <div className='container'>
        <BrandsModal open={brandsModal} toggle={closeBrand} editBrand={brandItem}/>
      <div className="row">
      {
        brands?.map((item,index)=> {
            return <div className="col-3 mt-5" key={index}>
                <div className="card" >
                <div className="card-body">
                    <h1 className='text-center'>{item.title}</h1>
                    <div className='d-flex justify-content-between'>
                        <button className="btn btn-info w-50" onClick={()=>editBrand(item)}>edit</button>
                        <button className="btn btn-danger w-50" onClick={()=>deleteBrand(item.id)}>delete</button>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success" onClick={()=>setBrandsModal(true)}>Add</button>
                </div>
            </div>
            </div>
        })
      }
      </div>
    </div>
  )
}

export default Brands
