import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageSkeleton from "./components/ui/loadingSkeleton/PageSkeleton";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Collection = lazy(() => import("./pages/Collection"));
const Product = lazy(() => import("./pages/Product"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));

function App() {
  return (
    <Container>
      <Navbar />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
      </Suspense>
      <Footer />
    </Container>
  );
}
export default App;
