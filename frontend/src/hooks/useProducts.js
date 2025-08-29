import { useState, useEffect } from "react";
import { fetchProducts, createProduct, updateProduct, deleteProduct } from "../api/productsApi";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await fetchProducts();
      setProducts(res.data);
      setError("");
    } catch {
      setError("Failed to fetch products");
    }
    setLoading(false);
  };

  const addProduct = async (product) => {
    await createProduct(product);
    setMessage("Product added successfully");
    loadProducts();
  };

  const editProduct = async (id, product) => {
    await updateProduct(id, product);
    setMessage("Product updated successfully");
    loadProducts();
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setMessage("Product deleted successfully");
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading, message, error, addProduct, editProduct, removeProduct, loadProducts, setMessage, setError };
}
