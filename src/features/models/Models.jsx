import React, { useState } from 'react'
import { useDeleteModelsMutation, useGetModelsQuery } from '../posts/ApiSlice'
import ModelsModal from './ModelsModal'

const Models = () => {
    const {data: models} = useGetModelsQuery()
    const [deleteModel] = useDeleteModelsMutation()
    const [modelsModal, setModelsModal] = useState(false)
    const [editItem, setEditItem] = useState('')
    const closeModel = () => {
        setModelsModal(false)
        setEditItem("")
    }
    const editModel =(item)=> {
        setEditItem(item)
        setModelsModal(true)
    }
  return (
    <div className='container'>
        <ModelsModal open={modelsModal} toggle={closeModel} editItem={editItem}/>
      <div className="row">
      {
        models?.map((item,index)=> {
            return <div className="col-3 mt-5" key={index}>
                <div className="card" >
                <div className="card-body">
                    <h1 className='text-center'>{item.title}</h1>
                    <div className='d-flex justify-content-between'>
                        <button className="btn btn-info w-50" onClick={()=>editModel(item)}>edit</button>
                        <button className="btn btn-danger w-50" onClick={()=>deleteModel(item.id)}>delete</button>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success" onClick={()=>setModelsModal(true)}>Add</button>
                </div>
            </div>
            </div>
        })
      }
      </div>
    </div>
  )
}

export default Models
