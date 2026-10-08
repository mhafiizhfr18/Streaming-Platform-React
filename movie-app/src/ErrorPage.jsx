import "./index.css";
import errorpage from "./assets/Image/error-image.png";
import { useNavigate } from "react-router";


export function ErrorPage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/home");
    };

    return (
        <div className="error-page">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <img src={errorpage} alt="Error" />
            <button onClick={handleGoHome}>Back</button>
        </div>
    );
}
