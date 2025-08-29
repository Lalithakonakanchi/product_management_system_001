import { useState, useEffect } from "react";

export default function ProductForm({ onAdd, onEdit, editData, onCancel }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      ...form,
      id: Number(form.id),
      price: Number(form.price),
      quantity: Number(form.quantity),
    };

    if (editData) {
      onEdit(editData.id, product);
    } else {
      onAdd(product);
    }

    setForm({ id: "", name: "", description: "", price: "", quantity: "" });
  };

  return (
    <div className="card form-card">
      <h2>{editData ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
          required
          disabled={!!editData}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          step="0.01"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button className="btn" type="submit">
            {editData ? "Update" : "Add"}
          </button>
          {editData && (
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
