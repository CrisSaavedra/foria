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


const products: Product[] = [
    {
        id: new Date().getTime() + 11111,
        name: 'White Snow',
        category: 'HOODIE',
        image: hoodie_1,
        price: 25.000,
        description: 'A beautiful white hooded sweatshirt, perfect for you, surprisingly comfortable, exquisite fabric, quality and warm.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Sport Tan',
        category: 'HOODIE',
        image: hoodie_2,
        price: 25.000,
        description: 'A beautiful Tan hooded sweatshirt, perfect for you, surprisingly comfortable, exquisite fabric, quality and warm.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Sport Taupe',
        category: 'HOODIE',
        image: hoodie_3,
        price: 25.000,
        description: 'A beautiful Taupe hooded sweatshirt, perfect for you, surprisingly comfortable, exquisite fabric, quality and warm.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Cairo Beige',
        category: 'JACKET',
        image: jacket_1,
        price: 30.000,
        description: 'Great jacket, comfortable, exquisite for all occasions. If you are looking for something that suits you this is a very good option.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Cairo Coral',
        category: 'JACKET',
        image: jacket_2,
        price: 30.000,
        description: 'Great jacket, comfortable, exquisite for all occasions. If you are looking for something that suits you this is a very good option.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Varsity',
        category: 'JACKET',
        image: jacket_3,
        price: 30.000,
        description: 'Great jacket, comfortable, exquisite for all occasions. If you are looking for something that suits you this is a very good option.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Cairo Beige',
        category: 'SHORTS',
        image: short_1,
        price: 22.000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Cairo Coral',
        category: 'SHORTS',
        image: short_2,
        price: 22.000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Cargo Beige',
        category: 'SHORTS',
        image: short_3,
        price: 22.000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Cargo Black',
        category: 'SHORTS',
        image: short_4,
        price: 22.000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Cairo Black',
        category: 'SHORTS',
        image: short_5,
        price: 22.000,
        description: 'Enjoy great comfort, with these shorts. quality and beauty in one product. made with love for you to enjoy them everywhere.',
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Basic White',
        category: 'T-SHIRT',
        image: tshirt_1,
        price: 14.000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Basic Beige',
        category: 'T-SHIRT',
        image: tshirt_2,
        price: 14.000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Basic Black',
        category: 'T-SHIRT',
        image: tshirt_3,
        price: 14.000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Basic Second',
        category: 'T-SHIRT',
        image: tshirt_4,
        price: 14.000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'S',
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
        id: new Date().getTime() + 11111,
        name: 'Basic Cream',
        category: 'T-SHIRT',
        image: tshirt_5,
        price: 14.000,
        description: "Enjoy the quality and strength of the basics, the must-have, the must-have for everyone's wardrobe. Really vivid colors and incredible durability, that's what we offer you.",
        stock: [
            {
                size: 'S',
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
