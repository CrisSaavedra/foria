import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import { Outlet, useNavigate } from "react-router-dom";

const ForiaApp = () => {
    const navigate = useNavigate();


    useEffect(() => {
        navigate('/products');
    }, [])


    return (
        <>
            <header className="w-full mx-auto h-screen bg-blue-50 font-roboto">
                <Navbar />
                <Outlet />
            </header>
        </>
    )
}

export default ForiaApp