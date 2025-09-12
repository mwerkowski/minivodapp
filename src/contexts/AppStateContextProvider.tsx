import { useReducer } from "react";
import { AppStateContext } from "./AppStateContext";
import type { AppState } from "../models/AppState";
import { initialAppState } from "../models/AppState";

type Action =
  | { type: "search"; payload: string }
  | { type: "showTitle"; payload: string }
  | { type: "play"; payload: boolean };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "search":
      return { ...state, searchQuery: action.payload };
    case "showTitle":
      return { ...state, currentShowTitle: action.payload, isPlaying: true };
    case "play":
      return { ...state, isPlaying: action.payload };
    default:
      return state;
  }
}

export function AppStateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ searchQuery, currentShowTitle, isPlaying }, dispatch] = useReducer(
    reducer,
    initialAppState
  );

  const setSearchQuery = (query: string) =>
    dispatch({ type: "search", payload: query });

  const setShowTitle = (title: string) =>
    dispatch({ type: "showTitle", payload: title });

  const setPlay = (play: boolean) => dispatch({ type: "play", payload: play });

  return (
    <AppStateContext.Provider
      value={{
        searchQuery,
        currentShowTitle,
        isPlaying,
        setSearchQuery,
        setShowTitle,
        setPlay,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}
