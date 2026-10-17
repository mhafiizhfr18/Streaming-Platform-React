import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getData } from "../../services/api";
import { setData, setLoading, setError } from "./listSlice";

function ListLoader() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchMovies() {
            dispatch(setLoading(true));
            dispatch(setError(null));

            try {
                const movieData = await getData();

                dispatch(setData(movieData));
            } catch (error) {
                console.error("Gagal mengambil data film:", error);

                dispatch(setError("Gagal mengambil data film."));
            } finally {
                dispatch(setLoading(false));
            }
        }

        fetchMovies();
    }, [dispatch]);

    return null;
}

export default ListLoader;