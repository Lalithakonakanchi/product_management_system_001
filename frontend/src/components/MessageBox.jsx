// ✅ In MessageBox.jsx
export default function MessageBox({ message, error, onClear }) {
  if (!message && !error) return null;

  return (
    <div className="message-box">
      {message && (
        <div className="success-msg">
          {message} <button onClick={onClear}>×</button>
        </div>
      )}
      {error && (
        <div className="error-msg">
          {error} <button onClick={onClear}>×</button>
        </div>
      )}
    </div>
  );
}
