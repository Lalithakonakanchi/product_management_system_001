import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const fetchProducts = () => api.get("/products/");
export const createProduct = (product) => api.post("/products/", product);
export const updateProduct = (id, product) => api.put(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
