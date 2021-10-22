import { createContext, useContext, useMemo, useReducer } from "react";

import { AppReducer, initialState } from "./AppReducer";
const AppContext = createContext({});

interface PageState {
  dispatch: any;
  state: {
    previewState: boolean;
    url: string;
  };
}
export function AppWrapper({ children }: any) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const contextvalue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextvalue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext) as PageState;
}
