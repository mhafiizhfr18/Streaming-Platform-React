import { createSlice } from "@reduxjs/toolkit";

const getInitialMyList = () => {
    try {
        const savedList = localStorage.getItem("myList");

        return savedList ? JSON.parse(savedList) : [];
    } catch (error) {
        console.error("Gagal membaca My List dari localStorage:", error);
        return [];
    }
};

const initialState = {
    data: [],
    loading: false,
    error: null,
    myList: getInitialMyList(),
};

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addToMyList: (state, action) => {
            const movie = action.payload;

            const alreadyExists = state.myList.some(
                (item) => item.title === movie.title,
            );

            if (!alreadyExists) {
                state.myList.push(movie);
            }
        },
        removeFromMyList: (state, action) => {
            state.myList = state.myList.filter(
                (movie) => movie.title !== action.payload,
            );
        },
    },
});

export const { setData, setLoading, setError, addToMyList, removeFromMyList, } = listSlice.actions;

export default listSlice.reducer;
