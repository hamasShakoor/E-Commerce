import axios from "axios"

export const getCategories = () =>{
    return axios.get('http://localhost:3001/categories/')
}