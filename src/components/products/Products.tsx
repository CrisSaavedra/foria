import IonIcon from "@reacticons/ionicons"
import products from "../../db/database"
import { useEffect, useState } from "react"

const Products = () => {

    const [unsortProducts, setUnsortProducts] = useState<Product[]>([]);

    function shuffle() {
        return products.sort(() => Math.random() - 0.2);
    }


    useEffect(() => {
        setUnsortProducts(shuffle());
    }, [products])


    return (
        <main className="mx-auto mt-4 grid grid-cols-2 justify-items-center gap-y-2">

            {
                unsortProducts.map(product => {
                    return (
                        <div className="flex flex-col w-11/12">
                            <img className="rounded-t-lg h-60" src={product.image} alt="product_img" />
                            <div>
                                <h4 className="text-stone-700 font-medium mt-1">{product.name}</h4>
                                <div className="flex justify-between ">
                                    <p className="text-stone-500 text-[.9rem] font-medium mt-[.4rem]">$ {product.price}</p>
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