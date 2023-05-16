import { useState } from "react";
import Filters from "./components/filters/Filters"
import Navbar from "./components/navbar/Navbar"
import Products from "./components/products/Products"
import { FilterProvider } from "./contexts/FilterContext"
import DisplayProduct from "./components/product/DisplayProduct";

const ForiaApp = () => {

    const [selectProduct, setSelectProduct] = useState(false);

    return (
        <>
            <header className="w-full mx-auto h-screen bg-blue-50 font-roboto">
                <Navbar />

                {
                    selectProduct ? <FilterProvider>
                        <Filters />
                        <Products />
                    </FilterProvider> : <DisplayProduct />
                }


            </header>
        </>
    )
}

export default ForiaApp