import React from "react";
import { createDispatchHook, createSelectorHook } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppRootState, appStore } from "./app-store";

export type AppDispatch = typeof appStore.dispatch;

export const appStoreContext = React.createContext(null as any);
export const useAppDispatch = createDispatchHook(appStoreContext);
export const useAppSelector: TypedUseSelectorHook<AppRootState> =
  createSelectorHook(appStoreContext);
