interface Product {
    id: number,
    name: string,
    category: 'HOODIE' | 'JACKET' | 'SHORTS' | 'T-SHIRT',
    image: string,
    price: number,
    description: string,
    stock: Stock[]
}

interface Stock {
    size: 'S' | 'L' | 'XL',
    stock: number
}

