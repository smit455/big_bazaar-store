export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    billboard: Billboard;
    id: string;
    name: string;
    billboards: Billboard
}

export interface Product {
    id:string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
}

export interface Image {
    id:string;
    url:string;
}

export interface Size {
    id:string
    name: string;
    value: string;
}

export interface Color {
    id:string
    name: string;
    value: string;
}
