import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import CartContext from './context/CartContext.js'
import Main from './components/Main';

const App = () => {

	return (
		<BrowserRouter>
		  <CartContext>
			<NavBar />
			<Main />
			<Toaster position="top-center" reverseOrder={false} />
		  </CartContext>
		</BrowserRouter>
	  );
}

export default App;