import Axios from "axios";

const API_URL = import.meta.env.VITE_MOVIES_API_URL;

// GET: mengambil semua data film
export async function getData() {
    const response = await Axios.get(API_URL);
    return response.data;
}