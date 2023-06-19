import axios from 'axios'

export const getProductList = async (): Promise<{ id: number, name: string, price: number, createdAt: string }[]> => {
    const response = await axios.get('http://localhost:3001/api/products')

    return response.data
}
