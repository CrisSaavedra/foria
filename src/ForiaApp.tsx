import Filters from "./components/filters/Filters"
import Navbar from "./components/navbar/Navbar"


const ForiaApp = () => {
    return (
        <>
            <header className="w-full mx-auto h-screen bg-blue-50 font-roboto">
                <Navbar />
                <Filters />

            </header>
        </>
    )
}

export default ForiaApp