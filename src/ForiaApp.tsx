import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar"
import { Outlet, useNavigate } from "react-router-dom";
import Cart from "./components/cart/Cart";

const ForiaApp = () => {
    const navigate = useNavigate();
    const [cartVisibility, setCartVisibility] = useState(false);

    const changeCartVisibility = () => {
        setCartVisibility(!cartVisibility);
    }


    useEffect(() => {
        navigate('/products');
    }, [])



    return (
        <>
            <div className="w-full bg-blue-50  overflow-hidden mx-auto min-h-screen animate-initPage">
                <div className="max-w-[40rem] flex flex-col mx-auto lg:max-w-[65rem]">
                    <Navbar changeCartVisibility={changeCartVisibility} />
                    {
                        cartVisibility ? <Cart changeCartVisibility={changeCartVisibility}/> : null
                    }
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default ForiaApp