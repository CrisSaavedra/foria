import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import products from "../db/database";
import { Product } from "../components/products/type";


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
    const { state, addProductHandle } = useContext(CartContext);
    const navigate = useNavigate();

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
            alert('You must select a size !');
        } else {
            const find = state.find(product => product.id === dataProduct.id)
            if (find === undefined) {
                addProductHandle(dataProduct);
                navigate('/products');

                // Clear Component and add Size selected to product
            } else {
                alert('The product is already in the cart 😅');
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
        onAddToCart,
    }
}