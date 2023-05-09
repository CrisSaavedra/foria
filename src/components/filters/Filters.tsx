
const Filters = () => {
    return (
        <>
            <h3 className="mt-4 text-stone-600 font-medium text-[1.4rem] w-11/12 mx-auto ">Discover <span className="">your best side</span> </h3>
            <section className="mt-4 overflow-hidden overflow-x-auto h-10">
                <div className="pl-2 inline-flex  gap-2">
                    <button className="w-24 border-stone-600 border rounded-full font-normal hover:bg-stone-700 hover:text-blue-50  transition-colors">All</button>
                    <button className="w-24 border-stone-600 border rounded-full font-normal hover:bg-stone-700 hover:text-blue-50  transition-colors">T-shirt</button>
                    <button className="w-24 border-stone-600 border rounded-full font-normal hover:bg-stone-700 hover:text-blue-50  transition-colors">Hoodie</button>
                    <button className="w-24 border-stone-600 border rounded-full font-normal hover:bg-stone-700 hover:text-blue-50  transition-colors">Jacket</button>
                    <button className="w-24 border-stone-600 border rounded-full font-normal hover:bg-stone-700 hover:text-blue-50  transition-colors">Shorts</button>

                </div>
            </section>
        </>
    )
}

export default Filters