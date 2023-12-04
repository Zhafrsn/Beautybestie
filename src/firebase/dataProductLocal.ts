export type dataProductLocal = {
    id: string;
    title: string;
    category: string;
    price: number;
    brand: string;
    stock: number;
    imageUrl: string;
    desc: string;
};

export function dataProductLocal() {
    return [
        {
            id: 'khmFVUwWHkKdAJVXVrxK',
            title: "Emina",
            category: 'Face Wash',
            price: 12000,
            brand: 'Emina',
            stock: 2,
            imageUrl: '',
            desc: 'blablabla'
        },
        {
            id: 'HyVpXtN5cQq8wconLF4x',
            title: "Bright Stuff Toner",
            category: 'Toner',
            price: 69000,
            brand: 'Emina',
            stock: 10,
            imageUrl: '',
            desc: 'blablabla'
        }
    ];
}