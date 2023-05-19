import IonIcon from "@reacticons/ionicons"
import products from "../../db/database"
import { useContext, useEffect, useState } from "react"
import { toCLP } from "../../helpers/extraFunctions";
import { Filter, FilterContext } from "../../contexts/FilterContext";
import { Product } from "./type";
import LoadingMini from "../loaders/LoadingMini";
import { useNavigate } from "react-router-dom";


interface ProductState {
    products: Product[],
    loading: boolean
}

const Products = () => {

    const [dataProducts, setdataProducts] = useState<ProductState['products']>([]);
    const [isLoading, setIsLoading] = useState<ProductState['loading']>(true);
    const { filter } = useContext(FilterContext);
    const navigate = useNavigate();



    const filterProducts = (data: ProductState['products'], filter: Filter) => {
        if (filter.includes('All')) {
            setdataProducts(data);
        } else {
            setdataProducts(products.filter(product => product.category === filter));
        }

       
    }

    useEffect(() => {
        filterProducts(products, filter);
        setTimeout(() => {
            setIsLoading(false);
            }, 800);
    }, [filter])



    const onClickAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idProduct: number) => {
        e.preventDefault();
        navigate('/products/' + idProduct);
    }


    return (

        <>


            <main className=" mt-4 grid grid-cols-2 justify-items-center gap-y-2 min-w-max lg:grid-cols-4 ">
                {
                    !isLoading ? null : <LoadingMini />
                }
                {
                    dataProducts.map(product => {
                        return (
                            <div key={product.id} className="flex flex-col w-44">
                                <img className="rounded-t-lg h-60 w-44" src={product.image} alt={product.description} />
                                <div>
                                    <h4 className="text-stone-700 font-medium mt-1">{product.name}</h4>
                                    <div className="flex justify-between ">
                                        <p className="text-stone-500 text-[.9rem] font-medium mt-[.4rem]">$ {toCLP(product.price)}</p>
                                        <button onClick={e => onClickAdd(e, product.id)} type="button" ><IonIcon name='add-outline' size='large' className="text-[.9rem] text-blue-400  pr-1" /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </main>

        </>

    )
}

export default Products