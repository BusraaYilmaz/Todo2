import React, { useReducer } from "react";
import { notesInitialState } from "./notesInitialStage";
import { notesReducer } from "./notesReducder";

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [noteState, dispatchNote] = useReducer(notesReducer, notesInitialState);

  return (
    <Store.Provider
      value={{
        noteState,
        dispatchNote,
      }}
    >
      {children}
    </Store.Provider>
  );
};
