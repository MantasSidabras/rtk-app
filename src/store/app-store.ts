import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { exampleApi } from "./exampleApi/example";

const listenerMiddleware = createListenerMiddleware();

export const storeMiddlewares = [
  listenerMiddleware.middleware,
];

export const rootReducer = combineReducers({
  [exampleApi.reducerPath]: exampleApi.reducer,
});

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeMiddlewares),
});

setupListeners(appStore.dispatch);

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppStore = typeof appStore;
