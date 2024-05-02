import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import LabInventoryPage from "./pages/Lab/LabInventoryPage/LabInventoryPage";
import IndustrialInventoryPage from "./pages/Industrial/IndustrialInventoryPage/IndustrialInventoryPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

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
      (item) => item.product && item.product.id === product.id,
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

  console.log(cartItems);

  return (
    <>
      <CustomNavbar
        openDrawerTop={openDrawerTop}
        totalQuantitySum={totalQuantitySum}
      />
      <CustomDrawer
        placement="left"
        open={openDrawer}
        onClose={closeDrawerTop}
        totalQuantitySum={totalQuantitySum}
        subtotalSum={subtotalSum}
        cartItems={cartItems}
      />
      <Routes>
        <Route path="/" element={<LabInventoryPage addToCart={addToCart} />} />
        <Route
          path="/lab-inventory"
          element={<LabInventoryPage addToCart={addToCart} />}
        />
        <Route
          path="/industrial-inventory"
          element={<IndustrialInventoryPage />}
        />
      </Routes>
      {/* <CustomFooter /> */}
    </>
  );
}

export default App;
