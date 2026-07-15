import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
