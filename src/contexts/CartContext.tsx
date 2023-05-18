import { createContext } from "react";
import { useCart } from "../hooks/useCart";
import { Product } from "../components/products/type";


interface Props {
    children: JSX.Element[]
}

interface CartState {
    state: Product[],
    addProductHandle: (idProduct: Product) => void,
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

