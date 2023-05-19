
import hoodie_1 from '../assets/hoodie/hoodieblancoinvierno1.webp';
import hoodie_2 from '../assets/hoodie/hoodietan1.webp';
import hoodie_3 from '../assets/hoodie/hoodietaupe1.webp';

import jacket_1 from '../assets/jacket/chaquetacairobeige1.webp';
import jacket_2 from '../assets/jacket/chaquetacairocoral1.webp';
import jacket_3 from '../assets/jacket/varsity1.webp';

import short_1 from '../assets/shorts/shortcairobeige1.webp';
import short_2 from '../assets/shorts/shortcairocoral1.webp';
import short_3 from '../assets/shorts/shortcargo.webp';
import short_4 from '../assets/shorts/shortcargo2.webp';
import short_5 from '../assets/shorts/shortnegrocairo1.webp';

import tshirt_1 from '../assets/tshirt/polerabasica4.webp';
import tshirt_2 from '../assets/tshirt/polerabasica5.webp';
import tshirt_3 from '../assets/tshirt/polerabasica6.webp';
import tshirt_4 from '../assets/tshirt/polerabasica7.webp';
import tshirt_5 from '../assets/tshirt/polerabasica8.webp';
import { Product } from '../components/products/type';


const products: Product[] = [
    {
        id: 12,
        name: 'White Snow',
        category: 'Hoodie',
        image: hoodie_1,
        price: 25000,
        description: 'A beautiful white hooded sweatshirt, perfect for you, surprisingly comfortable, exquisite fabric, quality and warm.',
        stock: [
            {
                size: 'M',
                stock: 2,
            },
            {
                size: 'L',
                stock: 2,
            },
            {
                size: 'XL',
                stock: 2,
            },

        ]
    },
    {
        id: 123,
        name: 'Sport Tan',
        category: 'Hoodie',
        image: hoodie_2,
        price: 25000,
        description: 'A beautiful Tan hooded sweatshirt, perfect for you, surprisingly comfortable, exquisite fabric, quality and warm.',
        stock: [
            {
                size: 'M',
                stock: 2,
            },
            {
                size: 'L',
                stock: 2,
            },
            {
                size: 'XL',
                stock: 2,
            },

        ]
    },
    {
        id: 1234,
        name: 'Sport Taupe',
        category: 'Hoodie',
        image: hoodie_3,
        price: 25000,
        description: 'A beautiful Taupe hooded sweatshirt, perfect for you, surprisingly comfortable, exquisite fabric, quality and warm.',
        stock: [
            {
                size: 'M',
                stock: 2,
            },
            {
                size: 'L',
                stock: 2,
            },
            {
                size: 'XL',
                stock: 2,
            },

        ]
    },
    {
        id: 12341,
        name: 'Cairo Beige',
        category: 'Jacket',
        image: jacket_1,
        price: 30000,
        description: 'Great jacket, comfortable, exquisite for all occasions. If you are looking for something that suits you this is a very good option.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 12345,
        name: 'Cairo Coral',
        category: 'Jacket',
        image: jacket_2,
        price: 30000,
        description: 'Great jacket, comfortable, exquisite for all occasions. If you are looking for something that suits you this is a very good option.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 123456,
        name: 'Varsity',
        category: 'Jacket',
        image: jacket_3,
        price: 30000,
        description: 'Great jacket, comfortable, exquisite for all occasions. If you are looking for something that suits you this is a very good option.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 1234567,
        name: 'Cairo Beige',
        category: 'Shorts',
        image: short_1,
        price: 22000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 12345678,
        name: 'Cairo Coral',
        category: 'Shorts',
        image: short_2,
        price: 22000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 123456789,
        name: 'Cargo Beige',
        category: 'Shorts',
        image: short_3,
        price: 22000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 9,
        name: 'Cargo Black',
        category: 'Shorts',
        image: short_4,
        price: 22000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 98,
        name: 'Cairo Black',
        category: 'Shorts',
        image: short_5,
        price: 22000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 987,
        name: 'Basic White',
        category: 'T-shirt',
        image: tshirt_1,
        price: 14000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 9876,
        name: 'Basic Beige',
        category: 'T-shirt',
        image: tshirt_2,
        price: 14000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 98765,
        name: 'Basic Black',
        category: 'T-shirt',
        image: tshirt_3,
        price: 14000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 987654,
        name: 'Basic Second',
        category: 'T-shirt',
        image: tshirt_4,
        price: 14000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },

        ]
    },
    {
        id: 9876543,
        name: 'Basic Cream',
        category: 'T-shirt',
        image: tshirt_5,
        price: 14000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'M',
                stock: 1,
            },
            {
                size: 'L',
                stock: 1,
            },
            {
                size: 'XL',
                stock: 1,
            },
        ]
    },
]


export default products;