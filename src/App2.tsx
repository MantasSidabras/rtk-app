import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  exampleApi,
} from "./store/exampleApi/example";
import { useAppDispatch, useAppSelector } from "./store/appStoreHooks";

function App() {
  const dispatch = useAppDispatch();

  const {
    data: pokemon,
    error,
    isLoading,
  } = useAppSelector(exampleApi.endpoints.getPokemonByName.select("bulbasaur"));

  useEffect(() => {
    dispatch(
      exampleApi.endpoints.getPokemonByName.initiate("bulbasaur") as any
    );
  }, []);

  if (isLoading || !pokemon) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{JSON.stringify(error, null, 2)}</h2>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>
          {pokemon.name} {pokemon.id}
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
