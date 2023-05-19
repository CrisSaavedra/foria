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
            <header className="w-full h-screen bg-blue-50 font-roboto ">
                <div className="max-w-max flex flex-col mx-auto">
                    <Navbar />
                    <Outlet />
                </div>
            </header>
        </>
    )
}

export default ForiaApp