import axios from "axios";

export const changeProduct = async (id: number, productData: { name: string, price: number }):
    Promise<{ id: number, name: string, price: number, deleted_at: string }> => {
    const response = await axios.patch(`http://localhost:3001/api/products/${id}`, productData)

    return response.data
}