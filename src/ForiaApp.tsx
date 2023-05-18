import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import { Outlet, useNavigate } from "react-router-dom";
import CartProvider from "./contexts/CartContext";

const ForiaApp = () => {
    const navigate = useNavigate();


    useEffect(() => {
        navigate('/products');
    }, [])


    return (
        <>
            <header className="w-full mx-auto h-screen bg-blue-50 font-roboto">
                <CartProvider>
                    <Navbar />
                    <Outlet />
                </CartProvider>
            </header>
        </>
    )
}

export default ForiaApp