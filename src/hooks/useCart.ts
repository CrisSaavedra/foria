import { useReducer } from "react"
import { CartProduct } from "./type";

interface CartState {
    cart: CartProduct[]
}

type CartAction = {
    type: 'add-to-cart',
    payload: CartProduct
} |
{
    type: 'remove-from-cart',
    payload: number
}

const cartReducer = (state: CartState['cart'], action: CartAction) => {

    switch (action.type) {
        case 'add-to-cart':
            return [...state, action.payload];

        case 'remove-from-cart':
            return state.filter(product => product.id != action.payload);

    }
}


export const useCart = () => {

    const [state, dispatch] = useReducer(cartReducer, []);

    const addProductHandle = (newProduct: CartProduct) => {
        dispatch({
            type: 'add-to-cart',
            payload: newProduct,
        })
    }

    const removeProductHandle = (idProduct: number) => {
        dispatch({
            type: 'remove-from-cart',
            payload: idProduct,
        })
    }

    return {
        state,
        addProductHandle,
        removeProductHandle
    }
}