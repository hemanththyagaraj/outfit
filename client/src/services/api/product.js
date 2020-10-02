import Axios from "axios"
import { urls } from "../../config/urls"

export const createNewProduct = (product) => {
    return Axios.post(urls.newProduct, product)
}