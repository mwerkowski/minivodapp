export interface AppState {
  searchQuery: string;
  currentShowTitle: string;
  isPlaying: boolean;
}

export interface AppStateContextValue extends AppState {
  setSearchQuery: (query: string) => void;
  setShowTitle: (title: string) => void;
  setPlay: (play: boolean) => void;
}

export const initialAppState: AppState = {
  searchQuery: "",
  currentShowTitle: "",
  isPlaying: false,
};
