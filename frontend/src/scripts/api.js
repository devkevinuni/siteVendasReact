import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products/');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

// Futuramente para o vendedor:
export const deleteProduct = (id) => api.delete(`/products/${id}/`);
export const addProduct = (productData) => api.post('/products/', productData);

export default api;
