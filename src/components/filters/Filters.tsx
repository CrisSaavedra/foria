import { FilterContext } from "../../contexts/FilterContext"
import { useContext } from "react"


const filters = ['All', 'T-shirt', 'Hoodie', 'Jacket', 'Shorts'];

const Filters = () => {

    const { filter, setFilter } = useContext(FilterContext);

    return (
        <>
            <h3 className="mt-4 text-stone-600 font-medium text-[1.4rem] w-11/12 mx-auto ">Discover <span className="text-blue-400">your best side</span> </h3>
            <section className="mt-4 overflow-hidden overflow-x-auto h-10">
                <div className="pl-3 pr-2 inline-flex  gap-2">
                    {
                        filters.map((title) => (
                            <button key={title} className={filter != title ? 'w-24 border-stone-600 border rounded-full font-normal hover:bg-stone-700 hover:text-blue-50  transition-colors' : ' w-24 bg-stone-700 text-blue-50 border rounded-full font-normal '}>{title}</button>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Filters