import { createContext } from "react";
import type { AppStateContextValue } from "../models/AppState";

export const AppStateContext = createContext<AppStateContextValue | null>(null);
