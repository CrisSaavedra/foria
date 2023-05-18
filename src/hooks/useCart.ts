import { useReducer } from "react"
import { Product } from "../components/products/type"

interface Cart {
    cart: Product[]
}


type CartAction = {
    type: 'add-to-cart',
    payload: Product;
} |
{
    type: 'remove-from-cart',
    payload: number
}

const cartReducer = (state: Cart['cart'], action: CartAction) => {

    switch (action.type) {
        case 'add-to-cart':
            return [...state, action.payload];

        case 'remove-from-cart':
            return state.filter(product => product.id != action.payload);

    }
}


export const useCart = () => {

    const [state, dispatch] = useReducer(cartReducer, []);

    const addProductHandle = (newProduct: Product) => {
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