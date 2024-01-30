import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import "./SideBar.scss"
const SideBar = () => {
  const [active, setActive] = useState(1)
  const [sidebar, setSideBar] = useState([
    {id: 1, title: "Products", path: "/"},
    {id: 2, title: "Brands", path: "/brands"},
    {id: 3, title: "Models", path: "/models"},
  ])
  useEffect(()=> {
    let value = +localStorage.getItem("value")
    if(value) {
      setActive(value)
    } else {
      setActive(1)
    }
  }, [])
  const activeBtn =(id)=> {
    localStorage.setItem("value", id)
    setActive(id)
  }
  return (
      <div className="sidebar__items">
          <ul className="sidebar__list">
            {
              sidebar.map((item,index)=> {
                return <li className={`${active === item.id ? "active" : ""}`} key={index} onClick={()=>activeBtn(item.id)}>
                <Link to={item.path} className='sidebar__link' onClick={()=>activeBtn(item.id)}>{item.title}</Link>
              </li>
              })
            }
          </ul>
      </div>
  )
}

export default SideBar
