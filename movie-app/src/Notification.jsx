import "./App.css";

function Notification({ message, closing }) {
  return (
    <div className={`notification ${closing ? 'closing' : ''}`}>
        <span className="material-symbols-outlined">
            check_circle
        </span>
        
      <p>{message}</p>

      <div className="notification-progress"></div>
    </div>
  );
}

export default Notification;