import IonIcon from "@reacticons/ionicons"

const Products = () => {
    return (
        <main className="mx-auto mt-4 grid grid-cols-2 justify-items-center gap-y-2">
            <div className="flex flex-col w-10/12">
                <img className="rounded-t-lg" src="https://i.pravatar.cc/150" alt="product_img" />
                <div>
                    <h4 className="text-stone-700 font-medium mt-1">Name Product</h4>
                    <div className="flex justify-between ">
                        <p className="text-stone-500 text-[.9rem] font-medium mt-[.4rem]">$ 25.000</p>
                        <button type="button" ><IonIcon name='add-outline' size='large' className="text-[.9rem] text-blue-400  pr-1" /></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-10/12 ">
                <img className="rounded-t-lg" src="https://i.pravatar.cc/150" alt="product_img" />
                <div>
                    <h4 className="text-stone-700 font-medium mt-1">Name Product</h4>
                    <div className="flex justify-between ">
                        <p className="text-stone-500 text-[.9rem] font-medium mt-[.4rem]">$ 25.000</p>
                        <button type="button" ><IonIcon name='add-outline' size='large' className="text-[.9rem] text-blue-400  pr-1" /></button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-10/12 ">
                <img className="rounded-t-lg" src="https://i.pravatar.cc/150" alt="product_img" />
                <div>
                    <h4 className="text-stone-700 font-medium mt-1">Name Product</h4>
                    <div className="flex justify-between ">
                        <p className="text-stone-500 text-[.9rem] font-medium mt-[.4rem]">$ 25.000</p>
                        <button type="button" ><IonIcon name='add-outline' size='large' className="text-[.9rem] text-blue-400  pr-1" /></button>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Products