import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { counterReducer } from "./counter-slice";

const listenerMiddleware = createListenerMiddleware();

export const storeMiddlewares = [listenerMiddleware.middleware];

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export const commonStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeMiddlewares),
});

setupListeners(commonStore.dispatch);

export type CommonRootState = ReturnType<typeof commonStore.getState>;
export type CommonStore = typeof commonStore;
