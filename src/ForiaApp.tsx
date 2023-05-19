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
            <div className="w-full bg-blue-50 ">
                <div className="max-w-max flex flex-col mx-auto">
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