import {
  fetchBaseQuery,
  coreModule,
  reactHooksModule,
  buildCreateApi,
  createApi,
} from "@reduxjs/toolkit/query/react";
import { appStoreContext, useAppDispatch } from "../appStoreHooks";
import { createDispatchHook, createSelectorHook } from "react-redux";

type Response = {
  name: string;
  id: string;
};

const customCreateApi = buildCreateApi(
  coreModule(),
  reactHooksModule({
    useDispatch: useAppDispatch,
    // useSelector: createSelectorHook(appStoreContext),
  })
);

// Define a service using a base URL and expected endpoints
export const exampleApi = customCreateApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Response, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = exampleApi;
