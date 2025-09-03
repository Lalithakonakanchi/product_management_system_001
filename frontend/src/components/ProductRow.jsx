export default function ProductRow({ product, onEdit, onDelete, currency }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td className="name-cell">{product.name}</td>
      <td className="desc-cell" title={product.description}>
        {product.description}
      </td>
      <td className="price-cell">${product.price}</td>
      <td>
        <span className="qty-badge">{product.quantity}</span>
      </td>
      <td>
        <div className="row-actions">
          <button className="btn btn-edit" onClick={() => onEdit(product)}>
            Edit
          </button>
          <button className="btn btn-delete" onClick={() => onDelete(product.id)}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
