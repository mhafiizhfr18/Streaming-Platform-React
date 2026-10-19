import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import listReducer, {
    addToMyList,
    removeFromMyList,
} from "./listSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: (action) =>
        addToMyList.match(action) || removeFromMyList.match(action),

    effect: (_, listenerApi) => {
        const myList = listenerApi.getState().list.myList;

        localStorage.setItem("myList", JSON.stringify(myList));
    },
});

export const store = configureStore({
    reducer: {
        list: listReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});