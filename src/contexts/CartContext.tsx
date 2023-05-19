import { createContext } from "react";
import { useCart } from "../hooks/useCart";
import { CartProduct } from "../hooks/type";


interface Props {
    children: JSX.Element[] | JSX.Element
}

interface CartState {
    state: CartProduct[],
    addProductHandle: (product: CartProduct) => void,
    removeProductHandle: (idProduct: number) => void,
    clearCardHandle: () => void
}

const initalState: CartState = {
    state: [],
    addProductHandle: () => { },
    removeProductHandle: () => { },
    clearCardHandle: () => { }
}

export const CartContext = createContext<CartState>(initalState);

const CartProvider = ({ children }: Props) => {

    const { state, addProductHandle, removeProductHandle, clearCardHandle } = useCart();

    return (
        <CartContext.Provider value={{ state, addProductHandle, removeProductHandle, clearCardHandle }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

