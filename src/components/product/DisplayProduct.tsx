import { useEffect, useState } from "react"
import { Product } from "../products/type"
import products from "../../db/database"
import { useParams } from "react-router-dom"
import { toCLP } from "../../helpers/extraFunctions"
import IonIcon from "@reacticons/ionicons"



interface DisplayProductState {
    data: Product
}


const initalState: Product = {
    id: 0,
    name: '',
    category: "All",
    image: '',
    price: 0,
    description: '',
    stock: [],
}

const sizes = ['M', 'L', 'XL'];

const DisplayProduct = () => {

    const { id } = useParams();
    const [dataProduct, setDataProduct] = useState<DisplayProductState['data']>(initalState);

    useEffect(() => {
        // setDataProduct(products.find(product => product.id.toString() === id))
        setDataProduct(products[0]);
    }, [id])



    return (

        <main className=" w-11/12 mx-auto">

            <a href="#"><IonIcon name='close-outline' size='large' className='text-stone-600 text-[1rem] mt-1' /></a>
            <section className="flex flex-col gap-5 mt-4 pb-4">
                <img src={dataProduct.image} alt="product-img" />
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-stone-700 text-xl font-medium">{dataProduct.name}</h3>
                        <p className="text-stone-500">{`$ ` + toCLP(dataProduct.price)}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-base text-stone-600 font-medium">Select Size</h4>
                        <div className="flex gap-4 ">

                            {
                                sizes.map(title => {
                                    return (<button key={title} className="rounded-full w-7 h-7 border border-stone-500 text-stone-500 text-sm hover:text-blue-50 hover:bg-stone-500 transition-colors">{title}</button>)
                                })
                            }

                            
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-base text-stone-600 font-medium">Description</h4>
                        <p className="text-sm text-stone-500 font-medium">{dataProduct.description}</p>
                    </div>
                </div>
                <button className="bg-blue-50 w-11/12 mx-auto h-9 rounded-xl text-blue-400 font-medium border-blue-400 border-2 hover:bg-blue-400 hover:text-blue-50 transition-colors">Add to Cart</button>
            </section>
        </main>
    )
}

export default DisplayProduct
