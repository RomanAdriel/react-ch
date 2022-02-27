import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav>
            <CartWidget/>
            <a href="#">Categoría 1</a>
            <a href="#">Categoría 2</a>
            <a href="#">Categoría 3</a>
        </nav>
    )
}

export default NavBar