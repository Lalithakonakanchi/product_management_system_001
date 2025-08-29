import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import TaglineSection from "../components/TaglineSection";
import MessageBox from "../components/MessageBox";
import useProducts from "../hooks/useProducts";

export default function ProductsPage() {
  const {
    products,
    loading,
    message,
    error,
    addProduct,
    editProduct,
    removeProduct,
    setMessage,
    setError,
  } = useProducts();

  return (
    <div className="container">
      <ProductForm onAdd={addProduct} onEdit={editProduct} />
      <TaglineSection />
      <MessageBox
        message={message}
        error={error}
        onClear={() => {
          setMessage("");
          setError("");
        }}
      />

      <ProductTable
        products={products}
        onDelete={removeProduct}
        loading={loading}
      />
    </div>
  );
}
