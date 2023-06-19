import axios from 'axios'

export const deleteProduct = async (id:number): Promise<{ message:string }> => {
    await axios.delete(`http://localhost:3001/api/products/${id}`)

    return {message: 'Delete successful'}
}
