import Axios from "axios";

const API_URL = import.meta.env.VITE_MOVIES_API_URL;

// GET: mengambil semua data film
export async function getData() {
    const response = await Axios.get(API_URL);
    console.log("API URL:", API_URL);
    console.log("API response:", response.data);
    console.log("Is response an array:", Array.isArray(response.data));
    return response.data;
}
