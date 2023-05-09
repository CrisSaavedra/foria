import Filters from "./components/filters/Filters"
import Navbar from "./components/navbar/Navbar"
import Products from "./components/products/Products"


const ForiaApp = () => {
    return (
        <>
            <header className="w-full mx-auto h-screen bg-blue-50 font-roboto">
                <Navbar />
                <Filters />
                <Products/>
            </header>
        </>
    )
}

export default ForiaApp