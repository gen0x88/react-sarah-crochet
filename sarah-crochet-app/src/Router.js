import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="Aboutus" element={<AboutUsPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}