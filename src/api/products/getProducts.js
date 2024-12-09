import axios from "axios";

export const getProducts = (selectedCategoryId) => {
    return axios.get('http://localhost:3001/products/', {
        params: {
            category_id: selectedCategoryId
        }
    });
};
