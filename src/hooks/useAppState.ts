import { useContext } from "react";
import { AppStateContext } from "../contexts/AppStateContext";

export function useAppState() {
  const appContext = useContext(AppStateContext);
  if (!appContext) {
    throw new Error(
      "useAppState must be used within an AppStateContextProvider"
    );
  }
  return appContext;
}
