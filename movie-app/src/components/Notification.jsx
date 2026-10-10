import "../App.css";

function Notification({ message, type = "success", closing }) {
  const isSuccess = type === "success";

  return (
    <div className={`notification ${type} ${closing ? 'closing' : ''}`}
    role="status"
    >
        <span className="material-symbols-outlined">
            {isSuccess ? 'check_circle' : 'error'}
        </span>
        
      <p>{message}</p>

      <div className="notification-progress"></div>
    </div>
  );
}

export default Notification;