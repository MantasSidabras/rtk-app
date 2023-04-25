import React from "react";
import { createDispatchHook, createSelectorHook, useDispatch } from "react-redux";
import type { TypedUseSelectorHook  } from "react-redux";
import { AppRootState, appStore } from "./app-store";

export type AppDispatch = typeof appStore.dispatch;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appStoreContext = React.createContext(null as any);
export const useAppDispatch = createDispatchHook(
  appStoreContext
)
export const useAppSelector: TypedUseSelectorHook<AppRootState> =
  createSelectorHook(appStoreContext);
