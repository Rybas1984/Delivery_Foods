import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import Shops from "./Components/Shops/Shops";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Contacts from "./Components/Contacts/Contacts";
import style from "./App.module.css"


function App() {
  return (
    <div className={style.mainContainer}>
        <Header />
        <Navbar />
        <div className={style.container}>
            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/shops" element={<Shops />}/>
                <Route path="/shoppingCart" element={<ShoppingCart />}/>
                <Route path="/contacts" element={<Contacts />}/>
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
