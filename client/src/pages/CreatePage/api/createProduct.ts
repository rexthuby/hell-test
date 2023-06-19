import axios from "axios";

export const createProduct = async (productData:{name:string, price:number}): Promise<{ id: number, name: string, price: number, deleted_at: string }> => {
    const response = await axios.post('http://localhost:3001/api/products',productData)

    return response.data
}