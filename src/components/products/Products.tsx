import IonIcon from "@reacticons/ionicons"
import products from "../../db/database"
import { useContext, useEffect, useState } from "react"
import { shuffle, toCLP } from "../../helpers/extraFunctions";
import { Filter, FilterContext } from "../../contexts/FilterContext";
import { Product } from "./type";


interface ProductState {
    products: Product[],
}

const Products = () => {

    const [unsortProducts, setUnsortProducts] = useState<ProductState['products']>([]);
    const { filter } = useContext(FilterContext);


    const filterProducts = (data: ProductState['products'], filter: Filter) => {
        if (filter.includes('All')) {
            setUnsortProducts(shuffle(data));
        } else {
            setUnsortProducts(products.filter(product => product.category === filter));
        }
    }

    useEffect(() => {
        filterProducts(products, filter);
    }, [filter])




    return (
        <main className="mx-auto mt-4 grid grid-cols-2 justify-items-center gap-y-2">

            {
                unsortProducts.map(product => {
                    return (
                        <div key={product.id} className="flex flex-col w-11/12">
                            <img className="rounded-t-lg h-60" src={product.image} alt="product_img" />
                            <div>
                                <h4 className="text-stone-700 font-medium mt-1">{product.name}</h4>
                                <div className="flex justify-between ">
                                    <p className="text-stone-500 text-[.9rem] font-medium mt-[.4rem]">$ {toCLP(product.price)}</p>
                                    <button type="button" ><IonIcon name='add-outline' size='large' className="text-[.9rem] text-blue-400  pr-1" /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default Products