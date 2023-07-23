import product from './assets/product.jpg';
import cake_classes from './assets/cake_classes.png';
import recipe from './assets/recipe.png'
import black_forest from './assets/black_forest.jpg';
import lemon_ckae from './assets/lemon_cake.jpg';
import straberry from './assets/straberry.jpg';
import croissiant from './assets/croissiant.jpg'
import carrot_cake from './assets/carrot_cake.jpg';
import pound_cake from './assets/pound_cake.jpg';
import genoise_cake from './assets/genoise_cake.jpg';
import sponge_cake from './assets/sponge_cake.jpg'

export const navbarData = [
    {
        title: 'Product',
        to: '/home',
    },
    {
        title: 'Pricing',
        to: '/home',
    },
    {
        title: 'Cart',
        to: '/cart',
    }
]


export const bannerData = [
    {
        title: 'Products',
        description: 'A large variety of baked goods ranging from huge cakes to mini muffins, Visit us today',
        image: product,
        imageAlt: 'Cake Image'
    },
    {
        title: 'Cake Class',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi nobis  ',
        image: cake_classes,
        imageAlt: 'Cake Image'

    },
    {
        title: 'Recipes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi nobis  ',
        image: recipe,
        imageAlt: 'Cake Image'

    }
]

export const cartData = [
    {
        productId: '112asd',
        title: 'Black Forest',
        image: black_forest,
        imageAlt: 'Black Forest Pastry',
        price: '12.89$',
        count: 2
    },
    {
        productId: '11wasd',
        title: 'Croissant',
        image: croissiant,
        imageAlt: 'Black Forest Pastry',
        price: '4.45$',
        count: 1,
    },
]

export const catalogData = [
    {
        productId: '112asd',
        title: 'Black Forest',
        image: black_forest,
        imageAlt: 'Black Forest Pastry',
        price: '12.89$',
    },
    {
        productId: '172agd',
        title: 'Strabeery Pastry',
        image: straberry,
        imageAlt: 'Black Forest Pastry',
        price: '6.89$',
    },
    {
        productId: '192fsd',
        title: 'Carrot Cake',
        image: carrot_cake,
        imageAlt: 'Black Forest Pastry',
        price: '12.89$',
    },

    {
        productId: '127hsd',
        title: 'Lemon Cake',
        image: lemon_ckae,
        imageAlt: 'Black Forest Pastry',
        price: '10.89$',
    },
    {
        productId: '112zsd',
        title: 'Sponge Cake',
        image: sponge_cake,
        imageAlt: 'Black Forest Pastry',
        price: '10.89$',
    },
    {
        productId: '112esd',
        title: 'Croissant',
        image: croissiant,
        imageAlt: 'Black Forest Pastry',
        price: '4.45$',
    },
    {
        productId: 'ls12asl',
        title: 'Pound Cake',
        image: pound_cake,
        imageAlt: 'Black Forest Pastry',
        price: '9.19$',
    },

    {
        productId: '11wasd',
        title: 'Genoise Cake',
        image: genoise_cake,
        imageAlt: 'Black Forest Pastry',
        price: '4.45$',
    },
]