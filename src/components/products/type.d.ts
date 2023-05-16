import { Filter } from "../../contexts/FilterContext"

export interface Product {
    id: number,
    name: string,
    category: Filter,
    image: string,
    price: number,
    description: string,
    stock: Stock[]
}

interface Stock {
    size: Size,
    stock: number
}


type Size = 'M' | 'L' | 'XL';
