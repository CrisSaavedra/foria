import { createContext } from "react";
import { useCart } from "../hooks/useCart";
import { CartProduct } from "../hooks/type";


interface Props {
    children: JSX.Element[] | JSX.Element
}

interface CartState {
    state: CartProduct[],
    addProductHandle: (product: CartProduct) => void,
    removeProductHandle: (idProduct: number) => void
}

const initalState: CartState = {
    state: [],
    addProductHandle: () => { },
    removeProductHandle: () => { }
}

export const CartContext = createContext<CartState>(initalState);

const CartProvider = ({ children }: Props) => {

    const { state, addProductHandle, removeProductHandle } = useCart();

    return (
        <CartContext.Provider value={{ state, addProductHandle, removeProductHandle }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

