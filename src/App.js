import {useState} from 'react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from './components/Main';

const App = () => {
	const [cartItems, setCartItems] = useState(0)

	return (
		<BrowserRouter >
			<NavBar cartItems={cartItems} />
			<Main setCartItems={setCartItems} cartItems={cartItems} />
			<Toaster position="top-center" reverseOrder={false} />
		</BrowserRouter>
	)
}

export default App;