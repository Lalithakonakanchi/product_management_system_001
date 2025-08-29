import ProductRow from "./ProductRow";

export default function ProductTable({ products, loading, onEdit, onDelete, sortField, sortDirection, onSort, currency }) {
  return (
    <div className="card list-card">
      <h2>Products</h2>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="scroll-x">
          <table className="product-table">
            <thead>
              <tr>
                <th
                  className={`sortable ${sortField === "id" ? `sort-${sortDirection}` : ""}`}
                  onClick={() => onSort("id")}
                >
                  ID
                </th>
                <th
                  className={`sortable ${sortField === "name" ? `sort-${sortDirection}` : ""}`}
                  onClick={() => onSort("name")}
                >
                  Name
                </th>
                <th>Description</th>
                <th
                  className={`sortable ${sortField === "price" ? `sort-${sortDirection}` : ""}`}
                  onClick={() => onSort("price")}
                >
                  Price
                </th>
                <th
                  className={`sortable ${sortField === "quantity" ? `sort-${sortDirection}` : ""}`}
                  onClick={() => onSort("quantity")}
                >
                  Quantity
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <ProductRow
                  key={p.id}
                  product={p}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  currency={currency}
                />
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="empty">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
