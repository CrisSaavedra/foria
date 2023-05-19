import IonIcon from "@reacticons/ionicons"
import DisplayCartProduct from "../displayCartProduct/DisplayCartProduct"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from 'react'
import { toCLP } from "../../helpers/extraFunctions"


interface Props {
    changeCartVisibility: () => void
}


const Cart = ({ changeCartVisibility }: Props) => {

    const { state, removeProductHandle, clearCardHandle } = useContext(CartContext);

    const onCloseClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        changeCartVisibility();
    }

    const calculateTotalPrice = (): number => {
        let sum = state.reduce((sum, { price }) => sum + price, 0);
        return sum;
    }

    return (
        <div className="fixed h-screen w-full z-20 ">
            <div className="fixed bg-stone-50 h-screen right-0 w-10/12 max-w-[22rem] z-20 animate-openCart">

                <div className="flex flex-col w-11/12 mx-auto  pt-5 justify-between h-[94vh] max-h-screen ">
                    <div>
                        <div className="flex justify-between ">
                            <h3 className="text-2xl font-semibold text-stone-600">Cart</h3>
                            <button onClick={onCloseClick}><IonIcon name="close-outline" size="large" className="text-stone-600"></IonIcon></button>
                        </div>

                        <div className=" mt-6 font-medium text-stone-500 overflow-y-auto flex flex-col gap-3 h-[66vh]">

                            <DisplayCartProduct removeProduct={removeProductHandle} products={state} />

                        </div>
                    </div>

                    <div className="flex flex-col  ">
                        <div className="flex justify-between mt-10 items-center font-medium">
                            <h4 className="text-stone-600 text-lg ">Total:</h4>
                            <p className="text-stone-700 text-xl ">${toCLP(calculateTotalPrice())}</p>
                        </div>
                        <button onClick={clearCardHandle} type="button" className="bg-blue-400 w-full mx-auto h-11 rounded-xl text-blue-50 font-medium border-blue-400 border-2 hover:bg-blue-50 hover:text-blue-400 transition-colors mt-5">Checkout</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart