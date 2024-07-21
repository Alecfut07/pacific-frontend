import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  getLabProducts,
  updateQuantityAvailableItemLab,
} from "./services/ItemLabService";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import HomePage from "./pages/Home/HomePage";
import LabInventoryPage from "./pages/Lab/LabInventoryPage/LabInventoryPage";
import IndustrialInventoryPage from "./pages/Industrial/IndustrialInventoryPage/IndustrialInventoryPage";
import IndustrialSecurityPage from "./pages/IndustrialSecurity/IndustrialSecurityPage";
import MissionVision from "./pages/MissionVision/MissionVision";
import LoginPage from "./pages/Login/LoginPage/LoginPage";
import LabProductsPage from "./pages/Admin/ProductsPage/LabProductsPage";
import QuotesPage from "./pages/Admin/QuotesPage/QuotesPage";
import Login from "./pages/User/Login/Login";
import Signup from "./pages/User/Signup/Signup";
import AuthContext from "./context/AuthContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  // const isLoggedIn = localStorage.getItem("accessToken");
  const { isLoggedIn, user, isStaff } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isQuotePage = location.pathname === "/admin/cotizaciones";

  const totalQuantitySum = cartItems.reduce(
    (total, item) => total + item.totalQuantity,
    0,
  );

  const subtotalSum = cartItems.reduce(
    (subtotal, item) => subtotal + item.product.price * item.product.quantity,
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

    // Verifica si el producto ya llego al limite de cantidad disponible
    if (existingItemIndex !== -1) {
      if (
        cartItems[existingItemIndex].product.quantity ===
          cartItems[existingItemIndex].product.quantity_available ||
        cartItems[existingItemIndex].product.quantity + quantity >
          cartItems[existingItemIndex].product.quantity_available
      ) {
        return alert(
          "No puedes agregar más únidades de este producto de las disponibles.",
        );
      }
    }

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza su cantidad.
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].totalQuantity += quantity;
      updatedCartItems[existingItemIndex].product.quantity += quantity;

      // Calcula el subtotal
      updatedCartItems[existingItemIndex].product.subtotal =
        price * updatedCartItems[existingItemIndex].totalQuantity;

      // updatedCartItems[existingItemIndex].product.quantity_available -=
      //   quantity;
      // setCartItems(updatedCartItems);
      // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCartItemsAndLocalStorage(updatedCartItems);
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1.
      // Calcula el subtotal
      const subtotal = price * quantity;
      const updatedProduct = {
        ...product,
        quantity: quantity,
        quantity_available_original: product.quantity_available,
        subtotal: subtotal,
        // quantity_available: product.quantity_available - quantity,
      };
      // setCartItems([
      //   ...cartItems,
      //   {
      //     product: updatedProduct,
      //     totalQuantity: quantity,
      //   },
      // ]);
      // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCartItemsAndLocalStorage([
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
        if (newQuantity < 1) {
          newQuantity = 1;
        }
        if (newQuantity > item.product.quantity_available) {
          newQuantity = item.product.quantity_available;
          alert("No puedes establecer una cantidad mayor a la disponible.");
        }
        const price = parseFloat(item.product.price.replace(/,/g, ""));
        const subtotal = price * newQuantity;
        // const updatedQuantityAvailable =
        //   item.product.quantity_available -
        //   (newQuantity - item.product.quantity);
        // updateQuantityAvailableItemLab(
        //   productUrl,
        //   item.product.name,
        //   item.product.price,
        //   item.product.category,
        //   item.product.category_page,
        //   item.product.main_image,
        //   item.product.description,
        //   updatedQuantityAvailable,
        //   item.product.is_featured,
        //   item.product.created_at,
        // );
        return {
          ...item,
          totalQuantity: newQuantity,
          product: {
            ...item.product,
            quantity: newQuantity,
            subtotal: subtotal,
            // quantity_available: updatedQuantityAvailable,
          },
        };
      }
      return item;
    });
    // setCartItems(updatedCartItems);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartItemsAndLocalStorage(updatedCartItems);
  };

  const removeItemFromCart = (productUrl) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.url !== productUrl,
    );
    // setCartItems(updatedCartItems);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));

    updateCartItemsAndLocalStorage(updatedCartItems);

    // try {
    //   const removedItem = cartItems.find(
    //     (item) => item.product.url === productUrl,
    //   );
    //   if (removedItem) {
    //     const {
    //       name,
    //       price,
    //       category,
    //       category_page,
    //       main_image,
    //       description,
    //       is_featured,
    //       created_at,
    //     } = removedItem.product;
    //     const updatedQuantityAvailable =
    //       removedItem.product.quantity_available + removedItem.totalQuantity;

    //     await updateQuantityAvailableItemLab(
    //       productUrl,
    //       name,
    //       price,
    //       category,
    //       category_page,
    //       main_image,
    //       description,
    //       updatedQuantityAvailable,
    //       is_featured,
    //       created_at,
    //     );
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const clearCart = async () => {
    try {
      // Almacena los datos de los elementos del carrito antes de limpiarlo
      // const itemsToUpdate = [];
      // for (const item of cartItems) {
      //   const { url } = item.product;
      //   const { totalQuantity } = item;
      //   const updatedQuantityAvailable =
      //     item.product.quantity_available + totalQuantity;
      //   itemsToUpdate.push({
      //     url,
      //     name: item.product.name,
      //     price: item.product.price,
      //     category: item.product.category,
      //     category_page: item.product.category_page,
      //     main_image: item.product.main_image,
      //     description: item.product.description,
      //     quantity_available: updatedQuantityAvailable,
      //     is_featured: item.product.is_featured,
      //     created_at: item.product.created_at,
      //   });
      // }

      // Actualiza la cantidad disponible para cada elemento del carrito antes de limpiarlo
      // for (const item of itemsToUpdate) {
      //   await updateQuantityAvailableItemLab(
      //     item.url,
      //     item.name,
      //     item.price,
      //     item.category,
      //     item.category_page,
      //     item.main_image,
      //     item.description,
      //     item.quantity_available,
      //     item.is_featured,
      //     item.created_at,
      //   );
      // }

      // setCartItems([]);
      // localStorage.removeItem("cartItems");
      updateCartItemsAndLocalStorage([]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCartItemsAndLocalStorage = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // useEffect(() => {
  //   if (!isLoggedIn && !isStaff && location.pathname === "/admin/productos") {
  //     navigate("/admin", { replace: true });
  //   }
  // }, [isLoggedIn, isStaff, location.path, navigate]);

  useEffect(() => {
    if (!isLoggedIn || !isStaff) {
      if (location.pathname.startsWith("/admin")) {
        navigate("/", { replace: true });
      }
    }
  }, [isLoggedIn, isStaff, location.pathname, navigate]);

  // console.log(cartItems);

  return (
    <>
      {isQuotePage ||
        (location.pathname !== "/admin/productos" && (
          <CustomNavbar
            openDrawerTop={openDrawerTop}
            totalQuantitySum={totalQuantitySum}
          />
        ))}
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
        {/* <Route path="/admin" element={<LoginPage />} /> */}
        {/* <Route path="/admin/lab-products" element={<LabProductsPage />} /> */}
        <Route
          path="/admin/productos"
          element={isLoggedIn && isStaff ? <LabProductsPage /> : <HomePage />}
        />
        <Route
          path="/admin/cotizaciones"
          element={isLoggedIn && isStaff ? <QuotesPage /> : <HomePage />}
        />
        <Route
          path="/productos-quimicos"
          element={<LabInventoryPage addToCart={addToCart} />}
        />
        <Route
          path="/herramientas-industriales"
          element={<IndustrialInventoryPage addToCart={addToCart} />}
        />
        <Route
          path="/seguridad-industrial"
          element={<IndustrialSecurityPage addToCart={addToCart} />}
        />
        <Route path="/misión-&-visión" element={<MissionVision />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<Signup />} />
      </Routes>
      {/* <CustomFooter /> */}
    </>
  );
}

export default App;
