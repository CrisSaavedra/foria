import Filters from "./components/filters/Filters"
import Navbar from "./components/navbar/Navbar"
import Products from "./components/products/Products"
import { FilterProvider } from "./contexts/FilterContext"


const ForiaApp = () => {
    return (
        <>
            <header className="w-full mx-auto h-screen bg-blue-50 font-roboto">
                <Navbar />
                <FilterProvider>
                    <Filters />
                    <Products />
                </FilterProvider>
            </header>
        </>
    )
}

export default ForiaApp