import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import AboutUsPage from "./pages/Aboutus";
import ButtonAppBar from './components/Navbar';
import ItemDetailsPage from './pages/item';
import CartPage from './pages/Cart';
import SearchPage from './pages/Search';

export default function AppRoutes() {
    return (
        <BrowserRouter basename="/react-sarah-crochet">
            <ButtonAppBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/search/" element={<SearchPage />} />
                <Route path="/shop/search/:name" element={<SearchPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/item/:id" element={<ItemDetailsPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
            </Routes>
        </BrowserRouter>
    );
}