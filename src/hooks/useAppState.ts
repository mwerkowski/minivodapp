import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext";

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error(
      "useAppState must be used within an AppStateContextProvider"
    );
  }
  return context;
}
