export interface IDish {
    id: number,
    name: string,
    price: number,
    description?: string,
    image?: string,
    category_id: number,
    prep_time?: string,
    rating?: string,
    availability?: string,
    ingredients?: string
}