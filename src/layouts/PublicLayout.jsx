import React from 'react'
import { Outlet } from 'react-router'

const PublicLayout = () => {
  return (
    <div>
        <h1>Header</h1>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default PublicLayout