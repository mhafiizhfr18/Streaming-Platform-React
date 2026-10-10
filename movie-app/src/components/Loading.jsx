import "../App.css";

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <span className="loading-spinner"></span>
        <p>Memuat...</p>
      </div>
    </div>
  );
}

export default Loading;