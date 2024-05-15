import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import HomePage from "./pages/Home/HomePage";
import LabInventoryPage from "./pages/Lab/LabInventoryPage/LabInventoryPage";
import IndustrialInventoryPage from "./pages/Industrial/IndustrialInventoryPage/IndustrialInventoryPage";
import Mission from "./pages/Mission/Mission";
import Vision from "./pages/Vision/Vision";
import LoginPage from "./pages/Login/LoginPage/LoginPage";
import LabProductsPage from "./pages/Admin/ProductsPage/LabProductsPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isLoggedIn = localStorage.getItem("accessToken");
  const location = useLocation();
  const navigate = useNavigate();

  const totalQuantitySum = cartItems.reduce(
    (total, item) => total + item.totalQuantity,
    0,
  );

  const subtotalSum = cartItems.reduce(
    (subtotal, item) => subtotal + item.product.subtotal,
    0,
  );

  const openDrawerTop = () => setOpenDrawer(true);

  const closeDrawerTop = () => setOpenDrawer(false);

  const addToCart = (product, quantity) => {
    // Convierte el precio de cadena a número y elimina las comas.
    const price = parseFloat(product.price.replace(/,/g, ""));

    const existingItemIndex = cartItems.findIndex(
      (item) => item.product && item.product.url === product.url,
    );

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza su cantidad.
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].totalQuantity += quantity;
      updatedCartItems[existingItemIndex].product.quantity += quantity;

      // Calcula el subtotal
      updatedCartItems[existingItemIndex].product.subtotal =
        price * updatedCartItems[existingItemIndex].totalQuantity;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1.
      // Calcula el subtotal
      const subtotal = price * quantity;
      const updatedProduct = {
        ...product,
        quantity: quantity,
        subtotal: subtotal,
      };
      setCartItems([
        ...cartItems,
        {
          product: updatedProduct,
          totalQuantity: quantity,
        },
      ]);
    }
  };

  const updateQuantity = (productUrl, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.product.url === productUrl) {
        const price = parseFloat(item.product.price.replace(/,/g, ""));
        const subtotal = price * newQuantity;
        return {
          ...item,
          totalQuantity: newQuantity,
          product: {
            ...item.product,
            quantity: newQuantity,
            subtotal: subtotal,
          },
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (productUrl) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.url !== productUrl,
    );
    setCartItems(updatedCartItems);
  };

  const clearCart = () => setCartItems([]);

  useEffect(() => {
    if (!isLoggedIn && location.pathname === "/admin/lab-products") {
      navigate("/admin", { replace: true });
    }
  }, [isLoggedIn, location.path, navigate]);

  console.log(cartItems);

  return (
    <>
      {location.pathname !== "/admin/lab-products" && (
        <CustomNavbar
          openDrawerTop={openDrawerTop}
          totalQuantitySum={totalQuantitySum}
        />
      )}
      <CustomDrawer
        placement="left"
        open={openDrawer}
        onClose={closeDrawerTop}
        totalQuantitySum={totalQuantitySum}
        subtotalSum={subtotalSum}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItemFromCart={removeItemFromCart}
        clearCart={clearCart}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<LoginPage />} />
        {/* <Route path="/admin/lab-products" element={<LabProductsPage />} /> */}
        <Route
          path="/admin/lab-products"
          element={isLoggedIn ? <LabProductsPage /> : <LoginPage />}
        />
        <Route
          path="/lab-inventory"
          element={<LabInventoryPage addToCart={addToCart} />}
        />
        <Route
          path="/industrial-inventory"
          element={<IndustrialInventoryPage addToCart={addToCart} />}
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
      {/* <CustomFooter /> */}
    </>
  );
}

export default App;
