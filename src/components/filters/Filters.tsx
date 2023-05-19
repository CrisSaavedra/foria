import { Filter, FilterContext } from "../../contexts/FilterContext"
import { useContext } from "react"

const filters:Filter[] = ['All', 'T-shirt', 'Hoodie', 'Jacket', 'Shorts'];

const Filters = () => {

    const { filter, setFilter } = useContext(FilterContext);

    const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, title: Filter) => {
        e.preventDefault();
        changeFilter(title);
    }

    const changeFilter = (name:Filter) => {
        setFilter(name);
    }


    return (
        <div className="w-11/12 mx-auto">
            <h3 className="mt-4 text-stone-600 font-medium text-[1.4rem]">Discover <span className="text-blue-400">your best side</span> </h3>
            <section className="mt-4 overflow-hidden overflow-x-auto h-10">
                <div className="pr-2 inline-flex  gap-2">
                    {
                        filters.map((title) => (
                            <button onClick={e => onClickButton(e,title)} key={title} className={filter != title ? 'w-24 border-stone-600 border rounded-full font-normal hover:bg-stone-700 hover:text-blue-50  transition-colors' : ' w-24 bg-stone-700 text-blue-50 border rounded-full font-normal '}>{title}</button>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Filters