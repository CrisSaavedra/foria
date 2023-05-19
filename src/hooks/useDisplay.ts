import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import products from "../db/database";
import { Product } from "../components/products/type";
import { CartProduct } from "./type";


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

export const useDisplay = () => {

    const { productId } = useParams();
    const [dataProduct, setDataProduct] = useState<DisplayProductState['data']>(initalState);
    const [selectSize, setSelectSize] = useState<string>('');
    const [alert, setAlert] = useState({
        state: false,
        msg: ''
    });
    const { state, addProductHandle } = useContext(CartContext);
    const navigate = useNavigate();



    const changeAlertState = (msg: string) => {
        const newAlert = {
            state: !alert.state,
            msg
        }
        setAlert(newAlert);
    }

    const onSelectSize = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, title: string) => {
        e.preventDefault();
        if (selectSize === title) {
            setSelectSize('');
        } else {
            setSelectSize(title);
        }
    }


    const onAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, dataProduct: Product, selectSize: string) => {
        e.preventDefault();
        if (selectSize === '') {
            changeAlertState('You must select a size!');

        } else {
            const find = state.find(product => product.id === dataProduct.id)
            if (find === undefined) {
                const { stock, ...data } = dataProduct;
                const cartProduct: CartProduct = {
                    ...data,
                    size: selectSize
                }
                addProductHandle(cartProduct);
                navigate('/products');

            } else {
                changeAlertState('Size is already in the cart!');
            }
        }
    }


    const loadData = () => {
        let find = products.find(product => product.id.toString() === productId) || initalState;
        setDataProduct(find)
    }



    useEffect(() => {
        loadData();
    }, [productId])

    return {
        dataProduct,
        selectSize,
        onSelectSize,
        changeAlertState,
        alert,
        onAddToCart,
    }
}