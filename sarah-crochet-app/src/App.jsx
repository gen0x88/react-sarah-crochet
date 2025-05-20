import "./App.css";
import { CartProvider } from "./components/CartProvider";
import AppRoutes from "./Router";

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
