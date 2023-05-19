import IonIcon from "@reacticons/ionicons"
import { CartProduct } from "../../hooks/type"
import { toCLP } from "../../helpers/extraFunctions"

interface Props {
    removeProduct: (idProduct: number) => void,
    products: CartProduct[],
}


const DisplayCartProduct = ({ removeProduct, products }: Props) => {

    const onClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idProduct: number) => {
        e.preventDefault();
        removeProduct(idProduct);
    }

    return (

        <>
            {
                products.map(product => {
                    return (
                        <div key={product.id+product.size} className="flex items-center h-28 p-1 border-gray-200 border drop-shadow-lg bg-gray-50 rounded-lg">
                            <img className="basis-1/4 h-24 w-24" src={product.image} alt="product-image" />
                            <div className="basis-3/4 mx-2 flex flex-col ">
                                <div className="flex justify-between w-full items-center">
                                    <h5 className="text-stone-600 text-lg">{product.name}</h5>
                                    <button onClick={e => onClickDelete(e, product.id)} type="button"><IonIcon name="trash-outline" size="large" className="text-[.65rem] text-red-400"></IonIcon></button>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm">${toCLP(product.price)}</p>
                                    <p className=" text-stone-600 text-base mt-6">Size: {product.size}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default DisplayCartProduct