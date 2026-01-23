import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

export default function AllRoutes() {
    return (
        <div className='dark:bg-neutral-primary-dark min-h-screen'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}
