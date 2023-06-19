import axios from "axios";

export const getProduct = async (id:number): Promise<{ id: number, name: string, price: number, deletedAt: string }> => {
    const response = await axios.get(`http://localhost:3001/api/products/${id}`)

    return response.data
}