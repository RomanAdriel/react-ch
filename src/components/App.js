import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import ItemListContainer from './ItemListContainer'

const greeting = "Saludos! Esto es un placeholder para el catálogo de productos"

const App = () => {
    return (<> <Header/> <Main/> <ItemListContainer saludo={greeting}/> <Footer/> </>)
}

export default App