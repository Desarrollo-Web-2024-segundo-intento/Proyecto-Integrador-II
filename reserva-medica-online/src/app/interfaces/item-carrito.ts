export interface ItemCarrito {
    id: number;
    img: string;
    alt: string;
    titulo: string;
    precio: number | undefined;
    cantidad: number | undefined;
    fecha: string;
    hora: string;
    subtotal: number;
    
}
