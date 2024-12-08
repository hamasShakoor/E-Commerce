import axios from "axios";

export const getProducts = (selectedCategoryId) => {
    // Sending the hardcoded category_id as a query parameter
    return axios.get('http://localhost:3001/products/', {
        params: {
            category_id: selectedCategoryId
        }
    });
};
